"use client";

import React from "react";

import { useState, useEffect } from "react";
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

interface DrawHistory {
  date: string;
  prizeName: string;
  prizeId: number;
}

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [prizes, setPrizes] = useState<Prize[]>([]);
  const [drawHistory, setDrawHistory] = useState<DrawHistory[]>([]);
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
      loadPrizes();

      // Load draw history from localStorage
      const storedHistory = localStorage.getItem("intel-draw-history");
      if (storedHistory) {
        try {
          setDrawHistory(JSON.parse(storedHistory));
        } catch (e) {
          console.error("Failed to parse history:", e);
        }
      }
    }
  }, [isAuthenticated]);

  const loadPrizes = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/sheets");
      const data = await response.json();
      if (data.prizes) {
        setPrizes(data.prizes);
      }
    } catch (error) {
      console.error("Error loading prizes:", error);
      alert("상품 목록을 불러오는데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const savePrizes = async (updatedPrizes: Prize[]) => {
    setLoading(true);
    try {
      const response = await fetch("/api/sheets", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prizes: updatedPrizes }),
      });

      if (response.ok) {
        setPrizes(updatedPrizes);
      } else {
        alert("저장에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error saving prizes:", error);
      alert("저장 중 오류가 발생했습니다.");
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

  const startEdit = (prize: Prize) => {
    setEditingId(prize.id);
    setEditValues({
      totalQty: prize.totalQty,
      remainingQty: prize.remainingQty,
    });
  };

  const saveEdit = async (id: number) => {
    const updatedPrizes = prizes.map((p) =>
      p.id === id
        ? {
            ...p,
            totalQty: editValues.totalQty,
            remainingQty: editValues.remainingQty,
          }
        : p
    );

    await savePrizes(updatedPrizes);
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const historyByDate = drawHistory.reduce((acc, item) => {
    const date = new Date(item.date).toLocaleDateString("ko-KR");
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {} as Record<string, DrawHistory[]>);

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              관리자 로그인
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2"
                >
                  비밀번호
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                  className="h-12"
                />
              </div>
              <Button type="submit" className="w-full h-12">
                로그인
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-gray-900">관리자 페이지</h1>
          <div className="flex gap-2">
            <Button onClick={loadPrizes} variant="outline" disabled={loading}>
              {loading ? "로딩 중..." : "새로고침"}
            </Button>
            <Button onClick={() => router.push("/")} variant="outline">
              메인으로 돌아가기
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">상품 재고 관리</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">상품명</TableHead>
                  <TableHead className="text-center">전체 수량</TableHead>
                  <TableHead className="text-center">남은 수량</TableHead>
                  <TableHead className="text-center">편집</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {prizes.map((prize) => (
                  <TableRow key={prize.id}>
                    <TableCell className="font-medium">{prize.name}</TableCell>
                    <TableCell className="text-center">
                      {editingId === prize.id ? (
                        <Input
                          type="number"
                          value={editValues.totalQty}
                          onChange={(e) =>
                            setEditValues((prev) => ({
                              ...prev,
                              totalQty: Number.parseInt(e.target.value) || 0,
                            }))
                          }
                          className="w-20 mx-auto text-center"
                          min="0"
                        />
                      ) : (
                        prize.totalQty
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {editingId === prize.id ? (
                        <Input
                          type="number"
                          value={editValues.remainingQty}
                          onChange={(e) =>
                            setEditValues((prev) => ({
                              ...prev,
                              remainingQty:
                                Number.parseInt(e.target.value) || 0,
                            }))
                          }
                          className="w-20 mx-auto text-center"
                          min="0"
                        />
                      ) : (
                        <span
                          className={
                            prize.remainingQty === 0
                              ? "text-red-600 font-bold"
                              : ""
                          }
                        >
                          {prize.remainingQty}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {editingId === prize.id ? (
                        <div className="flex gap-2 justify-center">
                          <Button
                            size="sm"
                            onClick={() => saveEdit(prize.id)}
                            disabled={loading}
                          >
                            저장
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={cancelEdit}
                            disabled={loading}
                          >
                            취소
                          </Button>
                        </div>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => startEdit(prize)}
                          disabled={loading}
                        >
                          수정
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">일별 추첨 통계</CardTitle>
          </CardHeader>
          <CardContent>
            {Object.keys(historyByDate).length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                추첨 기록이 없습니다.
              </p>
            ) : (
              <div className="space-y-6">
                {Object.entries(historyByDate).map(([date, items]) => (
                  <div key={date} className="border rounded-lg p-4">
                    <h3 className="font-bold text-lg mb-4">{date}</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>시간</TableHead>
                          <TableHead>상품명</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {items.map((item, index) => (
                          <TableRow key={`${item.date}-${index}`}>
                            <TableCell>
                              {new Date(item.date).toLocaleTimeString("ko-KR")}
                            </TableCell>
                            <TableCell>{item.prizeName}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <div className="mt-4 pt-4 border-t">
                      <p className="font-semibold">총 {items.length}회 추첨</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
