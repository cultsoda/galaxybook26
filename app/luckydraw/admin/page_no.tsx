"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Prize {
  id: number;
  name: string;
  totalQty: number;
  remainingQty: number;
}

interface LogEntry {
  timestamp: string;
  prizeName: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [prizes, setPrizes] = useState<Prize[]>([]);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValues, setEditValues] = useState<{
    totalQty: number;
    remainingQty: number;
  }>({ totalQty: 0, remainingQty: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const authStatus = sessionStorage.getItem("intel-admin-auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const loadData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/sheets");
      const data = await response.json();
      if (data.prizes) setPrizes(data.prizes);
      if (data.logs) setLogs(data.logs); // route.ts에서 logs도 함께 내려준다고 가정
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
      sessionStorage.setItem("intel-admin-auth", "true");
    } else {
      alert("비밀번호가 올바르지 않습니다.");
    }
  };

  // --- 일자별 통계 가공 로직 (기획자님 요청 사항) ---
  const prizeNames = prizes.map((p) => p.name);
  const statsMap: Record<string, Record<string, number>> = {};

  logs.forEach((log) => {
    // 날짜 포맷팅: "2026. 1. 20." 형태에서 "2026.01.20" 추출 또는 그대로 사용
    const date = log.timestamp.split(" ")[0].replace(/\.$/, "");
    const name = log.prizeName;

    if (!statsMap[date]) {
      statsMap[date] = {};
      prizeNames.forEach((n) => (statsMap[date][n] = 0));
    }
    if (statsMap[date][name] !== undefined) {
      statsMap[date][name]++;
    }
  });

  const sortedDates = Object.keys(statsMap).sort((a, b) => b.localeCompare(a));
  // ----------------------------------------------

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader>
            <CardTitle className="text-center">관리자 로그인</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                className="h-12"
              />
              <Button type="submit" className="w-full h-12 bg-blue-600">
                로그인
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">관리자 페이지</h1>
          <div className="flex gap-2">
            <Button onClick={loadData} variant="outline" disabled={loading}>
              새로고침
            </Button>
            <Button onClick={() => router.push("/")} variant="secondary">
              메인으로
            </Button>
          </div>
        </div>

        {/* 1. 일별 추첨 통계 표 (가로형) */}
        <Card className="shadow-lg border-t-4 border-t-purple-500">
          <CardHeader>
            <CardTitle>일별 추첨 통계</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead className="font-bold">일자</TableHead>
                    {prizeNames.map((name) => (
                      <TableHead key={name} className="text-center font-bold">
                        {name}
                      </TableHead>
                    ))}
                    <TableHead className="text-center font-bold bg-gray-100">
                      합계
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedDates.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={prizeNames.length + 2}
                        className="text-center py-10 text-gray-400"
                      >
                        당첨 기록이 없습니다.
                      </TableCell>
                    </TableRow>
                  ) : (
                    sortedDates.map((date) => {
                      const rowTotal = Object.values(statsMap[date]).reduce(
                        (a, b) => a + b,
                        0
                      );
                      return (
                        <TableRow key={date}>
                          <TableCell className="font-medium">{date}</TableCell>
                          {prizeNames.map((name) => (
                            <TableCell key={name} className="text-center">
                              {statsMap[date][name]}
                            </TableCell>
                          ))}
                          <TableCell className="text-center font-bold bg-gray-50">
                            {rowTotal}
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* 2. 상품 재고 관리 표 */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>상품 재고 관리</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>상품명</TableHead>
                  <TableHead className="text-center">전체 수량</TableHead>
                  <TableHead className="text-center">남은 수량</TableHead>
                  <TableHead className="text-center">관리</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {prizes.map((prize) => (
                  <TableRow key={prize.id}>
                    <TableCell className="font-medium">{prize.name}</TableCell>
                    <TableCell className="text-center">
                      {prize.totalQty}
                    </TableCell>
                    <TableCell
                      className={`text-center font-bold ${
                        prize.remainingQty === 0 ? "text-red-500" : ""
                      }`}
                    >
                      {prize.remainingQty}
                    </TableCell>
                    <TableCell className="text-center">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => alert("시트에서 직접 수정해주세요!")}
                      >
                        상세수정
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
