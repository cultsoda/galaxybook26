"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, ChevronRight, ChevronLeft, Home, BookOpen, Star, Trophy, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Step = "waiting" | "intro" | "story" | "quiz" | "results";

// 스토리 페이지 데이터 (5페이지)
const storyPages = [
  {
    text: "책책이는 마법의 숲에서 태어난 AI 친구입니다.",
    image: "/storyboard/story-1.jpeg",
  },
  {
    text: "책책이는 인터넷 없이도 노트북 안에서 작동해요.",
    image: "/storyboard/story-2.jpeg",
  },
  {
    text: "여러 AI 친구들이 협업하며 일합니다.",
    image: "/storyboard/story-3.jpeg",
  },
  {
    text: "개인정보는 안전하게 노트북 안에만 보관됩니다.",
    image: "/storyboard/story-4.jpeg",
  },
  {
    text: "인텔 Panther Lake의 CPU, GPU, NPU가 함께 작동합니다.",
    image: "/storyboard/story-5.jpeg",
  },
];

// 총 페이지 수 (스토리 5 + CTA 1)
const TOTAL_PAGES = storyPages.length + 1;

const quizData = [
  {
    question: "책책이는 인터넷이나 클라우드 연결 없이도 노트북 안에서 직접 실행되는 '온디바이스(On-device) AI'이다.",
    answer: true,
    hint: "구름(Cloud)과 노트북 중 어디에서 작동하는지 떠올려 보세요.",
    explanation: "정답입니다! 책책이는 온디바이스 AI로, 노트북 안에서 직접 작동합니다.",
  },
  {
    question: "책책이는 여러 역할을 가진 AI 에이전트들이 협업하는 '에이전틱 AI' 방식으로 작동한다.",
    answer: true,
    hint: "여러 요정이 팀을 이루어 일한다는 내용을 기억하세요.",
    explanation: "정답입니다! 여러 AI 에이전트들이 협업하여 작동하는 에이전틱 AI입니다.",
  },
  {
    question: "책책이와 나눈 대화 내용과 개인적인 독서 취향은 항상 외부 클라우드 서버로 전송되어 저장된다.",
    answer: false,
    hint: "데이터가 노트북 밖으로 나가는지, 아니면 안에만 머무는지 생각해보세요.",
    explanation: "정답입니다! 개인정보는 외부로 전송되지 않고 노트북 안에만 안전하게 보관됩니다.",
  },
  {
    question: "책책이가 노트북 안에서 빠르게 마법을 부릴 수 있는 이유는 최신 인텔 Panther Lake 엔진 속의 CPU, GPU, NPU 세 친구가 힘을 합치기 때문이다.",
    answer: true,
    hint: "세 가지 처리 장치가 함께 작동한다는 점을 떠올려 보세요.",
    explanation: "정답입니다! CPU, GPU, NPU가 협력하여 빠른 AI 처리를 가능하게 합니다.",
  },
  {
    question: "책책이는 딱딱한 텍스트로만 대답하지 않고 나를 위한 맞춤형 도서 정보를 예쁜 이미지로 생성해서 보여준다.",
    answer: true,
    hint: "사용자가 좋아할 만한 도서를 찾고 시각화하여 독서 여정을 보여줍니다.",
    explanation: "정답입니다! 책책이는 맞춤형 도서 정보를 시각적으로 예쁘게 보여줍니다.",
  },
];

// 페이지 플립 애니메이션 variants
const pageVariants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 90 : -90,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -90 : 90,
    opacity: 0,
    scale: 0.95,
  }),
};

const pageTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  duration: 0.6,
};

export default function StoryboardPage() {
  const [step, setStep] = useState<Step>("waiting");
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [quizIndex, setQuizIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(boolean | null)[]>(
    Array(quizData.length).fill(null)
  );
  const [showHint, setShowHint] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const resetQuiz = () => {
    setStep("waiting");
    setPageIndex(0);
    setDirection(1);
    setQuizIndex(0);
    setUserAnswers(Array(quizData.length).fill(null));
    setShowHint(false);
    setShowFeedback(false);
  };

  // 페이지 넘김 핸들러
  const handleNextPage = () => {
    if (pageIndex < TOTAL_PAGES - 1) {
      setDirection(1);
      setPageIndex(pageIndex + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageIndex > 0) {
      setDirection(-1);
      setPageIndex(pageIndex - 1);
    }
  };

  // 키보드 네비게이션
  useEffect(() => {
    if (step !== "story") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        handleNextPage();
      } else if (e.key === "ArrowLeft") {
        handlePrevPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [step, pageIndex]);

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...userAnswers];
    newAnswers[quizIndex] = answer;
    setUserAnswers(newAnswers);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setShowHint(false);
    if (quizIndex < quizData.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      setStep("results");
    }
  };

  const calculateScore = () => {
    return userAnswers.filter(
      (answer, index) => answer === quizData[index].answer
    ).length;
  };

  // 마지막 페이지인지 확인 (CTA 페이지)
  const isLastPage = pageIndex === TOTAL_PAGES - 1;
  const isStoryPage = pageIndex < storyPages.length;

  // --- Render Steps ---

  // Waiting Screen (Book Cover)
  if (step === "waiting") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900 perspective-[1000px] overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-black z-0" />

        <motion.div
          initial={{ rotateY: 0, rotateX: 10 }}
          animate={{ rotateY: [0, 5, 0, -5, 0], rotateX: [10, 5, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-[500px] h-[350px] md:w-[700px] md:h-[480px] lg:w-[900px] lg:h-[600px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* 책 표지 - 가로형 */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-700 rounded-r-3xl rounded-l-md shadow-[20px_20px_60px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center border-l-[12px] border-amber-900 text-white p-10"
            style={{ transform: "translateZ(20px)" }}
          >
            <div className="border-4 border-yellow-400/30 p-8 rounded-2xl w-full h-full flex flex-row items-center justify-center gap-12">
              <BookOpen className="w-32 h-32 lg:w-40 lg:h-40 text-yellow-300 drop-shadow-lg" />
              <div className="text-left">
                <h1 className="text-5xl lg:text-7xl font-bold mb-4 font-serif text-yellow-100">
                  Galaxy Story Book
                </h1>
                <p className="text-amber-200 text-2xl lg:text-3xl">책책이와 함께하는 AI 여행</p>
              </div>
            </div>

            {/* 책 두께 표현 */}
            <div className="absolute right-0 top-0 bottom-0 w-5 bg-amber-950 transform translate-x-full origin-left skew-y-[45deg]" />
            <div className="absolute bottom-0 left-0 right-0 h-5 bg-amber-950 transform translate-y-full origin-top skew-x-[45deg]" />
          </div>
        </motion.div>

        <div className="relative z-10 mt-12">
          <Button
            size="lg"
            onClick={() => setStep("story")}
            className="h-20 px-16 text-3xl bg-yellow-500 hover:bg-yellow-600 text-amber-950 font-bold rounded-full shadow-[0_0_30px_rgba(234,179,8,0.5)] animate-pulse hover:animate-none transition-all hover:scale-105"
          >
            책 펼치기
          </Button>
        </div>
      </main>
    );
  }

  // Intro (Before Quiz)
  if (step === "intro") {
    setTimeout(() => setStep("story"), 100);
    return null;
  }

  // Story Mode - 전체 화면 단일 페이지 플립
  if (step === "story") {
    return (
      <main className="h-screen w-screen flex flex-col bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 overflow-hidden relative">
        {/* 배경 장식 */}
        <div className="absolute inset-0 bg-[url('/wood-pattern.png')] opacity-10 bg-repeat" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* 상단 바 */}
        <div className="relative z-50 flex items-center justify-between px-8 py-4 bg-black/20 backdrop-blur-sm">
          {/* 홈 버튼 */}
          <Link href="/">
            <Button
              variant="ghost"
              size="lg"
              className="h-14 px-6 text-white/70 hover:text-white hover:bg-white/10 rounded-full text-xl"
            >
              <Home className="w-6 h-6 mr-3" />
              홈으로
            </Button>
          </Link>

          {/* 프로그레스 바 */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex items-center gap-4">
              <span className="text-white/80 text-xl font-medium whitespace-nowrap">
                {pageIndex + 1} / {TOTAL_PAGES}
              </span>
              <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((pageIndex + 1) / TOTAL_PAGES) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </div>

          {/* 빈 공간 */}
          <div className="w-40" />
        </div>

        {/* 페이지 컨테이너 - 전체 화면 */}
        <div className="flex-1 relative z-10 flex items-center justify-center p-6 perspective-[2000px]">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={pageIndex}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={pageTransition}
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: direction > 0 ? "left center" : "right center",
              }}
              className="w-full h-full max-w-[95vw] max-h-[75vh] bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              {isStoryPage ? (
                // 스토리 페이지 (1~5) - 이미지 전체 + 하단 텍스트 바
                <div className="h-full w-full flex flex-col relative overflow-hidden">
                  {/* 책등 그림자 */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/15 via-black/5 to-transparent z-10 pointer-events-none" />

                  {/* 이미지 영역 */}
                  <div className="flex-1 min-h-0 p-6 pb-4 flex items-center justify-center">
                    <div className="w-full h-full relative rounded-2xl overflow-hidden bg-white shadow-xl flex items-center justify-center">
                      <img
                        src={storyPages[pageIndex].image}
                        alt={`Story ${pageIndex + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* 하단 텍스트 바 */}
                  <div className="flex-shrink-0 w-full px-8 py-5 bg-gradient-to-r from-amber-100 via-orange-50 to-amber-100 border-t-2 border-amber-200/50">
                    <div className="flex items-center gap-6 max-w-6xl mx-auto">
                      {/* 페이지 번호 */}
                      <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-amber-500 text-white font-bold text-2xl shadow-lg">
                        {pageIndex + 1}
                      </div>

                      {/* 스토리 텍스트 */}
                      <p className="flex-1 text-2xl lg:text-3xl xl:text-4xl text-gray-800 font-medium font-serif break-keep leading-snug">
                        {storyPages[pageIndex].text}
                      </p>

                      {/* 페이지 힌트 */}
                      <div className="flex-shrink-0 text-amber-600/70 text-xl font-medium flex items-center gap-2">
                        <span>{pageIndex + 1} / {storyPages.length}</span>
                        <ChevronRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // CTA 페이지 (6페이지)
                <div className="h-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden">
                  {/* 배경 장식 */}
                  <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl" />
                  <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-300/20 rounded-full blur-2xl" />

                  {/* 콘텐츠 */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-center relative z-10"
                  >
                    <Sparkles className="w-24 h-24 lg:w-32 lg:h-32 text-amber-500 mx-auto mb-8 drop-shadow-lg" />

                    <h2 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 font-serif">
                      이야기가 끝났어요!
                    </h2>

                    <p className="text-2xl lg:text-3xl text-gray-600 mb-12">
                      책책이와 함께한 이야기를 잘 기억하고 있나요?<br />
                      이제 퀴즈로 확인해 볼까요?
                    </p>

                    <Button
                      size="lg"
                      onClick={() => setStep("quiz")}
                      className="h-24 px-20 text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
                    >
                      <Trophy className="w-10 h-10 mr-4" />
                      퀴즈 풀기
                    </Button>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 하단 네비게이션 */}
        <div className="relative z-50 flex justify-center items-center gap-6 px-8 py-6 bg-black/20 backdrop-blur-sm">
          {/* 이전 버튼 */}
          <Button
            size="lg"
            onClick={handlePrevPage}
            disabled={pageIndex === 0}
            className={`h-16 px-10 text-2xl rounded-full shadow-xl transition-all border-2 ${
              pageIndex === 0
                ? "bg-gray-700/50 text-gray-500 border-gray-600/30 cursor-not-allowed"
                : "bg-slate-700 hover:bg-slate-600 text-white border-slate-500/50 hover:scale-105 active:scale-95"
            }`}
          >
            <ChevronLeft className="w-7 h-7 mr-2" />
            이전
          </Button>

          {/* 다음 버튼 - 마지막 페이지(CTA)에서는 숨김 */}
          {!isLastPage && (
            <Button
              size="lg"
              onClick={handleNextPage}
              className="h-16 px-12 text-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 border-2 border-white/20"
            >
              다음
              <ChevronRight className="ml-2 w-7 h-7" />
            </Button>
          )}
        </div>
      </main>
    );
  }

  // Quiz & Results - 전체 화면 (키오스크 최적화)
  if (step === "quiz" || step === "results") {
    return (
      <main className="h-screen w-screen flex flex-col bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 overflow-hidden relative">
        {/* 배경 장식 */}
        <div className="absolute inset-0 bg-[url('/wood-pattern.png')] opacity-10 bg-repeat" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* 상단 바 */}
        <div className="relative z-50 flex items-center justify-between px-8 py-4 bg-black/20 backdrop-blur-sm">
          {/* 홈 버튼 */}
          <Button
            variant="ghost"
            size="lg"
            onClick={resetQuiz}
            className="h-14 px-6 text-white/70 hover:text-white hover:bg-white/10 rounded-full text-xl"
          >
            <BookOpen className="w-6 h-6 mr-3" />
            처음으로
          </Button>

          {/* 프로그레스 바 */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex items-center gap-4">
              <span className="text-white/80 text-xl font-medium whitespace-nowrap">
                {step === "quiz" ? `${quizIndex + 1} / ${quizData.length}` : "완료!"}
              </span>
              <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-400 to-purple-500"
                  initial={{ width: 0 }}
                  animate={{
                    width: step === "quiz"
                      ? `${((quizIndex + 1) / quizData.length) * 100}%`
                      : "100%"
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </div>

          {/* 빈 공간 */}
          <div className="w-40" />
        </div>

        {/* 메인 컨텐츠 */}
        <div className="flex-1 relative z-10 flex items-center justify-center p-6">
          {step === "quiz" && (
            <div className="w-full h-full max-w-[95vw] max-h-[75vh] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col">
              {/* 문제 영역 */}
              <div className="flex-1 flex flex-col items-center justify-center p-12 lg:p-16">
                <motion.div
                  key={quizIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center max-w-5xl"
                >
                  <span className="inline-block px-6 py-2 bg-indigo-600 text-white text-xl font-bold rounded-full mb-8">
                    Question {quizIndex + 1}
                  </span>
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-relaxed break-keep">
                    {quizData[quizIndex].question}
                  </h2>
                </motion.div>
              </div>

              {/* 답변 영역 */}
              {!showFeedback ? (
                <div className="flex-shrink-0 p-8 bg-white/50 border-t border-gray-200">
                  <div className="flex justify-center gap-8 max-w-4xl mx-auto">
                    <button
                      onClick={() => handleAnswer(true)}
                      className="group flex-1 h-40 lg:h-48 bg-green-50 rounded-3xl border-4 border-green-200 hover:border-green-500 hover:shadow-2xl transition-all flex flex-col items-center justify-center gap-4 hover:scale-105 active:scale-95"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-12 h-12 text-green-600" />
                      </div>
                      <span className="text-5xl font-bold text-green-700">O</span>
                    </button>

                    <button
                      onClick={() => handleAnswer(false)}
                      className="group flex-1 h-40 lg:h-48 bg-red-50 rounded-3xl border-4 border-red-200 hover:border-red-500 hover:shadow-2xl transition-all flex flex-col items-center justify-center gap-4 hover:scale-105 active:scale-95"
                    >
                      <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <XCircle className="w-12 h-12 text-red-600" />
                      </div>
                      <span className="text-5xl font-bold text-red-700">X</span>
                    </button>
                  </div>

                  {/* 힌트 */}
                  <div className="mt-6 text-center">
                    <button
                      onClick={() => setShowHint(!showHint)}
                      className="text-gray-500 hover:text-indigo-600 text-lg font-medium underline decoration-dashed underline-offset-4 transition-colors"
                    >
                      {showHint ? "힌트 숨기기" : "힌트가 필요하신가요?"}
                    </button>
                    {showHint && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-4 p-4 bg-indigo-100 rounded-xl text-indigo-700 text-xl font-medium max-w-2xl mx-auto"
                      >
                        {quizData[quizIndex].hint}
                      </motion.div>
                    )}
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex-shrink-0 p-8 ${
                    userAnswers[quizIndex] === quizData[quizIndex].answer
                      ? "bg-green-100 border-t-4 border-green-400"
                      : "bg-red-100 border-t-4 border-red-400"
                  }`}
                >
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      {userAnswers[quizIndex] === quizData[quizIndex].answer ? (
                        <CheckCircle2 className="w-12 h-12 text-green-600" />
                      ) : (
                        <XCircle className="w-12 h-12 text-red-600" />
                      )}
                      <span
                        className={`text-4xl font-bold ${
                          userAnswers[quizIndex] === quizData[quizIndex].answer
                            ? "text-green-700"
                            : "text-red-700"
                        }`}
                      >
                        {userAnswers[quizIndex] === quizData[quizIndex].answer
                          ? "정답입니다!"
                          : "오답입니다!"}
                      </span>
                    </div>
                    <p className="text-2xl text-gray-700 mb-6">
                      {quizData[quizIndex].explanation}
                    </p>
                    <Button
                      onClick={handleNextQuestion}
                      className="h-16 px-12 text-2xl bg-indigo-600 hover:bg-indigo-700 text-white rounded-full"
                    >
                      {quizIndex < quizData.length - 1 ? "다음 문제" : "결과 보기"}
                      <ChevronRight className="ml-2 w-6 h-6" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {step === "results" && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full h-full max-w-[95vw] max-h-[75vh] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col items-center justify-center p-12"
            >
              <div className="text-center">
                <div className="relative inline-block mb-8">
                  <Trophy className="w-40 h-40 lg:w-48 lg:h-48 text-yellow-400 drop-shadow-lg animate-bounce" />
                  <Star
                    className="absolute top-0 right-0 w-16 h-16 text-yellow-300"
                    style={{ animation: "spin 3s linear infinite" }}
                  />
                </div>

                <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                  퀴즈 완료!
                </h2>
                <p className="text-2xl lg:text-3xl text-gray-500 mb-8">
                  수고하셨습니다. 당신의 점수는?
                </p>

                <div className="text-8xl lg:text-9xl font-black text-indigo-600 mb-12">
                  {calculateScore()}
                  <span className="text-4xl lg:text-5xl text-gray-400 ml-2">/ {quizData.length}</span>
                </div>

                <div className="flex gap-6 justify-center">
                  <Button
                    variant="outline"
                    onClick={resetQuiz}
                    className="h-16 px-10 text-2xl border-2 border-gray-300 bg-white hover:bg-gray-50 rounded-full"
                  >
                    <BookOpen className="w-7 h-7 mr-3" /> 처음으로
                  </Button>
                  <Button
                    onClick={() => {
                      setQuizIndex(0);
                      setUserAnswers(Array(quizData.length).fill(null));
                      setShowHint(false);
                      setShowFeedback(false);
                      setStep("quiz");
                    }}
                    className="h-16 px-10 text-2xl bg-indigo-600 hover:bg-indigo-700 text-white rounded-full"
                  >
                    다시 도전하기
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    );
  }

  return null;
}
