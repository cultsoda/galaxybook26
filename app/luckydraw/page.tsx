"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";

const shakeAnimation = `
  @keyframes shake {
    0%, 100% { transform: rotate(0deg) scale(1); }
    10% { transform: rotate(-5deg) scale(1.05); }
    20% { transform: rotate(5deg) scale(0.95); }
    30% { transform: rotate(-5deg) scale(1.05); }
    40% { transform: rotate(5deg) scale(0.95); }
    50% { transform: rotate(-3deg) scale(1.02); }
    60% { transform: rotate(3deg) scale(0.98); }
    70% { transform: rotate(-3deg) scale(1.02); }
    80% { transform: rotate(3deg) scale(0.98); }
    90% { transform: rotate(-1deg) scale(1.01); }
  }
  .animate-shake {
    animation: shake 0.5s ease-in-out infinite;
  }
`;

interface Prize {
  id: number;
  name: string;
  totalQty: number;
  remainingQty: number;
}

export default function LuckyDrawPage() {
  const [prizes, setPrizes] = useState<Prize[]>([]);
  const [selectedPrize, setSelectedPrize] = useState<Prize | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // 이 줄 추가
  const [isAnimating, setIsAnimating] = useState(false); // 이 줄 추가

  // Load prizes from Google Sheets
  useEffect(() => {
    const loadPrizesFromAPI = async () => {
      try {
        const response = await fetch("/api/sheets");
        const data = await response.json();
        if (data.prizes) {
          setPrizes(data.prizes);
          setIsLoading(false); // 이 줄 추가
        }
      } catch (error) {
        console.error("Failed to load prizes:", error);
      }
    };

    loadPrizesFromAPI();
  }, []);

  // Save prizes to localStorage whenever they change

  const drawPrize = async () => {
    if (isLoading || isAnimating) return; // isAnimating 추가

    const availablePrizes = prizes.filter((p) => p.remainingQty > 0);

    if (availablePrizes.length === 0) {
      alert("모든 상품이 소진되었습니다!");
      return;
    }

    // 애니메이션 시작
    setIsAnimating(true);

    const randomIndex = Math.floor(Math.random() * availablePrizes.length);
    const drawnPrize = availablePrizes[randomIndex];

    const updatedPrizes = prizes.map((p) =>
      p.id === drawnPrize.id ? { ...p, remainingQty: p.remainingQty - 1 } : p
    );

    try {
      const response = await fetch("/api/sheets", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prizes: updatedPrizes }),
      });

      if (response.ok) {
        setPrizes(updatedPrizes);

        const history = JSON.parse(
          localStorage.getItem("intel-draw-history") || "[]"
        );
        history.push({
          date: new Date().toISOString(),
          prizeName: drawnPrize.name,
          prizeId: drawnPrize.id,
        });
        localStorage.setItem("intel-draw-history", JSON.stringify(history));

        await fetch("/api/sheets", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prizeName: drawnPrize.name }),
        });

        // 3초 후 애니메이션 종료 + 결과 표시
        setTimeout(() => {
          setIsAnimating(false);
          setSelectedPrize(drawnPrize);
          setIsModalOpen(true);
        }, 1500);
      } else {
        setIsAnimating(false);
        alert("상품 수량 업데이트에 실패했습니다.");
      }
    } catch (error) {
      setIsAnimating(false);
      console.error("Error updating prize:", error);
      alert("업데이트 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <style>{shakeAnimation}</style>
      <main className="min-h-screen relative bg-gradient-to-br from-blue-600 to-indigo-700">
        {/* Touch area */}
        <div
          className="min-h-screen flex flex-col items-center justify-center p-8 cursor-pointer select-none active:scale-[0.99] transition-transform"
          onClick={drawPrize}
        >
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-white mb-4">럭키드로우</h1>
            <p className="text-2xl text-blue-100">화면을 터치하여 추첨하세요</p>
          </div>

          {/* Main image placeholder */}
          <div
            className="bg-gray-400 rounded-lg shadow-2xl flex items-center justify-center"
            style={{ width: "800px", height: "600px" }}
          >
            <span className="text-2xl font-semibold text-gray-700">
              화면을 터치하여 럭키 드로우 상품을 뽑아보세요!
            </span>
          </div>
        </div>

        {/* Admin badge in bottom-right corner */}
        <Link
          href="/luckydraw/admin"
          className="fixed bottom-8 right-8 opacity-30 hover:opacity-100 transition-opacity"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </Link>
        {/* 박스 흔들기 애니메이션 */}
        {isAnimating && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="animate-shake">
              <div className="w-64 h-64 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl shadow-2xl flex items-center justify-center relative">
                {/* 리본 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-32 bg-yellow-400 -translate-y-12"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-400"></div>

                {/* 물음표 */}
                <span className="text-8xl text-white font-bold">?</span>
              </div>
            </div>
            <p className="absolute bottom-32 text-2xl text-white font-bold">
              추첨 중...
            </p>
          </div>
        )}

        {/* Prize result modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-md backdrop-blur-sm bg-white/95">
            <div className="flex flex-col items-center py-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                축하합니다!
              </h2>

              {/* Prize image placeholder */}
              <div
                className="bg-gray-300 rounded-lg mb-6 flex items-center justify-center"
                style={{ width: "400px", height: "300px" }}
              >
                <span className="text-lg font-medium text-gray-600">
                  상품 이미지
                </span>
              </div>

              <p className="text-4xl font-bold text-blue-600 mb-2">
                {selectedPrize?.name}
              </p>
              <p className="text-lg text-gray-600">당첨되었습니다!</p>
            </div>

            <DialogFooter>
              <Button
                onClick={() => setIsModalOpen(false)}
                className="w-full h-16 text-2xl font-bold bg-blue-600 hover:bg-blue-700"
              >
                확인
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </>
  );
}
