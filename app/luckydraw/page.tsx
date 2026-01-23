"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Gift, Sparkles, Trophy, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  // Load prizes from Google Sheets
  useEffect(() => {
    const loadPrizesFromAPI = async () => {
      try {
        const response = await fetch("/api/sheets");
        const data = await response.json();
        if (data.prizes) {
          setPrizes(data.prizes);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Failed to load prizes:", error);
        setIsLoading(false); // 로드 실패 시에도 로딩 상태 해제
      }
    };

    loadPrizesFromAPI();
  }, []);

  const drawPrize = async () => {
    if (isLoading || isAnimating) return;

    const availablePrizes = prizes.filter((p) => p.remainingQty > 0);

    if (availablePrizes.length === 0) {
      alert("모든 상품이 소진되었습니다!");
      return;
    }

    setIsAnimating(true);
    setCountdown(3); // 카운트다운 시작

    // 카운트다운 타이머 로직
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          return 0; // 0이 되면 종료
        }
        return prev ? prev - 1 : null;
      });
    }, 1000);

    const randomIndex = Math.floor(Math.random() * availablePrizes.length);
    const drawnPrize = availablePrizes[randomIndex];

    const updatedPrizes = prizes.map((p) =>
      p.id === drawnPrize.id ? { ...p, remainingQty: p.remainingQty - 1 } : p
    );

    // API 호출은 백그라운드에서 진행
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

        // 3초 후(카운트다운 종료 시점) 결과 표시
        setTimeout(() => {
          setIsAnimating(false);
          setCountdown(null);
          setSelectedPrize(drawnPrize);
          setIsModalOpen(true);
        }, 3000);
      } else {
        clearInterval(timer);
        setIsAnimating(false);
        setCountdown(null);
        alert("상품 수량 업데이트에 실패했습니다.");
      }
    } catch (error) {
      clearInterval(timer);
      setIsAnimating(false);
      setCountdown(null);
      console.error("Error updating prize:", error);
      alert("업데이트 중 오류가 발생했습니다.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0f1c] to-black text-white">
      {/* 배경 장식 요소 */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/20 blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[100px]" />

      <div
        className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center cursor-pointer select-none"
        onClick={drawPrize}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-purple-200 tracking-tight drop-shadow-lg mb-4">
            Galaxy Lucky Draw
          </h1>
          <p className="text-xl md:text-2xl text-blue-300 font-light tracking-wide">
            {isAnimating ? "행운이 다가오고 있습니다..." : "화면을 터치하여 행운을 시험해보세요!"}
          </p>
        </motion.div>

        {/* Main interactive area */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
          
          {/* 카운트다운 애니메이션 */}
          <AnimatePresence>
            {isAnimating && countdown !== null && countdown > 0 ? (
              <motion.div
                key={countdown}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                exit={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute z-50 flex items-center justify-center"
              >
                <span className="text-[10rem] md:text-[12rem] font-black text-white text-shadow-[0_0_15px_rgba(255,255,255,0.9),_0_0_30px_rgba(59,130,246,0.7)]">
                  {countdown}
                </span>
              </motion.div>
            ) : (
              /* 평상시 Galaxy Box (카운트다운 중에는 숨김/흐림 처리 or 두근거림) */
              !isAnimating && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full h-full bg-gradient-to-br from-blue-700 to-purple-800 rounded-3xl shadow-2xl flex items-center justify-center border-4 border-blue-400 transform transition-transform duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                >
                    <motion.div
                      key="gift-icon"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute flex flex-col items-center justify-center"
                    >
                      <Gift className="w-32 h-32 text-blue-200 drop-shadow-[0_0_15px_rgba(191,219,254,0.5)]" />
                      <Sparkles className="absolute -top-4 -right-4 w-12 h-12 text-yellow-300 animate-pulse" />
                    </motion.div>
                    
                    {/* 큐브 내부 장식 */}
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 bg-center bg-cover pointer-events-none mix-blend-overlay"></div>
                </motion.div>
              )
            )}
            
            {/* 카운트다운 중일 때 배경 박스 (심장박동 효과) */}
            {isAnimating && countdown !== null && (
               <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-3xl border-4 border-blue-400/30 blur-sm flex items-center justify-center"
               >
               </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Touch prompt */}
        {!isAnimating && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 text-2xl text-blue-200 animate-pulse"
          >
            <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-400 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            </span>
            화면 어디든 터치하세요!
          </motion.p>
        )}
      </div>

      {/* Admin badge */}
      <Link
        href="/luckydraw/admin"
        className="fixed bottom-8 right-8 p-3 bg-white/10 backdrop-blur-md rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300 shadow-lg group"
        onClick={(e) => e.stopPropagation()}
      >
        <Settings className="w-7 h-7 text-gray-300 group-hover:rotate-90 transition-transform duration-300" />
      </Link>

      {/* Prize result modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md p-8 bg-gradient-to-br from-slate-800 to-slate-900 text-white border border-blue-700/50 shadow-xl rounded-2xl">
          <DialogHeader className="flex flex-col items-center">
            <Trophy className="w-24 h-24 text-yellow-400 mb-4 animate-bounce" />
            <DialogTitle className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 mb-2">
              축하합니다!
            </DialogTitle>
            <p className="text-xl text-blue-200">[{selectedPrize?.name}] 에 당첨되셨습니다!</p>
          </DialogHeader>

          <div className="flex flex-col items-center py-6">
            <div
              className="relative w-full max-w-[300px] aspect-video bg-gray-700 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-gray-600 shadow-inner"
            >
              <span className="text-xl font-medium text-gray-400">
                상품 이미지
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <Sparkles className="absolute top-4 right-4 w-8 h-8 text-yellow-300" />
            </div>

            <p className="text-lg text-blue-100 text-center">
              ※ 현장 직원 안내에 따라 경품을 수령해주세요.
            </p>
          </div>

          <DialogFooter className="pt-4">
            <Button
              onClick={() => setIsModalOpen(false)}
              className="w-full h-16 text-2xl font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all active:scale-95"
            >
              확인
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
