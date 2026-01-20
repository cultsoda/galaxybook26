"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, ChevronRight, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Step = "waiting" | "intro" | "story" | "quiz" | "results";

// 애니메이션 스타일 정의 추가
const flipAnimationStyle = `
  @keyframes flip-book {
    0% { 
      transform: rotateY(0deg); 
      opacity: 1;
    }
    100% { 
      transform: rotateY(-160deg); /* 180도까지 돌리면 너무 사라지니 160도가 적당합니다 */
      opacity: 0;
    }
  }
  .animate-flip {
    animation: flip-book 0.5s ease-in-out; /* 조금 더 묵직하게 0.5초 */
    transform-origin: left; /* 핵심: 왼쪽을 축으로 고정하여 책장처럼 회전 */
    backface-visibility: hidden;
  }
  .perspective-1000 {
    perspective: 2000px; /* 원근감을 조절하여 더 자연스럽게 */
  }
`;

const storyPages = [
  "책책이는 마법의 숲에서 태어난 AI 친구입니다.",
  "책책이는 인터넷 없이도 노트북 안에서 작동해요.",
  "여러 AI 친구들이 협업하며 일합니다.",
  "개인정보는 안전하게 노트북 안에만 보관됩니다.",
  "인텔 Panther Lake의 CPU, GPU, NPU가 함께 작동합니다.",
];

const quizData = [
  {
    question: (
      <>
        책책이는 인터넷이나 클라우드 연결 없이도 노트북 <br />
        안에서 직접 실행되는 '온디바이스(On-device) AI'이다.
      </>
    ),
    answer: true,
    hint: "구름(Cloud)과 노트북 중 어디에서 작동하는지 떠올려 보세요.",
    explanation:
      "정답입니다! 책책이는 온디바이스 AI로, 노트북 안에서 직접 작동합니다.",
  },
  {
    question: (
      <>
        책책이는 여러 역할을 가진 AI 에이전트들이 협업하는 <br /> '에이전틱 AI'
        방식으로 작동한다.
      </>
    ),
    answer: true,
    hint: "여러 요정이 팀을 이루어 일한다는 내용을 기억하세요.",
    explanation:
      "정답입니다! 여러 AI 에이전트들이 협업하여 작동하는 에이전틱 AI입니다.",
  },
  {
    question: (
      <>
        책책이와 나는 대화 내용과 개인적인 독서 취향을 보관하기 <br />
        위해 항상 외부 클라우드 서버로 전송되어 저장된다.
      </>
    ),
    answer: false,
    hint: "데이터가 노트북 밖으로 나가는지, 아니면 안에만 머무는지 생각해보세요.",
    explanation:
      "정답입니다! 개인정보는 외부로 전송되지 않고 노트북 안에만 안전하게 보관됩니다.",
  },
  {
    question: (
      <>
        책책이가 노트북 안에서 빠르게 마법을 부릴 수 있는 <br />
        이유는 최신 인텔 Panther Lake 엔진 속의 <br />
        CPU, GPU, NPU 세 친구가 힘을 합치기 때문이다.
      </>
    ),
    answer: true,
    hint: "세 가지 처리 장치가 함께 작동한다는 점을 떠올려 보세요.",
    explanation:
      "정답입니다! CPU, GPU, NPU가 협력하여 빠른 AI 처리를 가능하게 합니다.",
  },
  {
    question: (
      <>
        책책이는 딱딱한 텍스트로만 대답하지 않고 나를 위한 <br />
        맞춤형 도서 정보를 예쁜 이미지로 생성해서 보여준다.
      </>
    ),
    answer: true,
    hint: "사용자가 좋아할 만한 도서를 찾고 시각화하여 독서 여정을 보여줍니다.",
    explanation:
      "정답입니다! 책책이는 맞춤형 도서 정보를 시각적으로 예쁘게 보여줍니다.",
  },
];

export default function StoryboardPage() {
  const [step, setStep] = useState<Step>("waiting");
  const [storyIndex, setStoryIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(boolean | null)[]>(
    Array(quizData.length).fill(null)
  );
  const [showHint, setShowHint] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const resetQuiz = () => {
    setStep("waiting");
    setStoryIndex(0);
    setQuizIndex(0);
    setUserAnswers(Array(quizData.length).fill(null));
    setShowHint(false);
    setShowFeedback(false);
  };

  const handleStoryNext = () => {
    if (storyIndex < storyPages.length - 1) {
      setIsFlipping(true);
      // 애니메이션이 '솨라락' 넘어가는 시간(0.6초)과 비슷하게 맞춰줍니다.
      setTimeout(() => {
        setStoryIndex(storyIndex + 1);
        setIsFlipping(false);
      }, 500); // 0.5초 정도로 수정하여 시각적 연결을 부드럽게 함
    } else {
      setStep("quiz");
    }
  };

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

  // Waiting Screen
  if (step === "waiting") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="flex flex-col items-center gap-6 w-full max-w-7xl">
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border-4 border-gray-300 shadow-2xl">
            <img
              src="/storyboard/waiting-screen.png"
              alt="대기화면"
              className="w-full h-full object-cover"
            />
          </div>

          <Button
            size="lg"
            onClick={() => setStep("intro")}
            className="h-20 px-16 text-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
          >
            시작하기
          </Button>
        </div>
      </main>
    );
  }

  // Quiz Intro
  if (step === "intro") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Card className="p-14 max-w-4xl text-center bg-white shadow-xl">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">
            책책이와 함께하는 AI 퀴즈
          </h1>
          <p className="text-2xl text-gray-600 mb-10 leading-relaxed">
            먼저 책책이의 이야기를 읽어보세요.
            <br />그 다음 5개의 퀴즈를 풀어보세요!
          </p>
          <Button
            size="lg"
            onClick={() => setStep("story")}
            className="h-20 px-16 text-2xl bg-purple-600 hover:bg-purple-700 text-white"
          >
            퀴즈 시작
          </Button>
        </Card>
      </main>
    );
  }

  // Story Pages
  if (step === "story") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="w-full max-w-7xl flex flex-col">
          {/* 상단 인디케이터 */}
          <div className="mb-4 text-center">
            <span className="text-xl font-semibold text-purple-700 bg-white/50 px-4 py-1 rounded-full shadow-sm">
              {storyIndex + 1} / {storyPages.length}
            </span>
          </div>

          {/* 애니메이션 영역: 고정 높이를 주어 버튼 위치를 확보합니다 */}
          <div
            className="relative w-full mb-6"
            style={{ perspective: "2500px", height: "calc(100vh - 240px)" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={storyIndex}
                initial={{ rotateY: 20, opacity: 0, x: 50 }}
                animate={{ rotateY: 0, opacity: 1, x: 0 }}
                exit={{
                  rotateY: -110,
                  opacity: 0,
                  x: -150,
                  transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
                }}
                transition={{ duration: 0.5 }}
                style={{
                  transformOrigin: "left center",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  zIndex: 1,
                }}
              >
                <Card className="h-full p-8 bg-white shadow-2xl border-l-[12px] border-l-gray-100 flex flex-col items-center justify-between relative overflow-hidden">
                  {/* 왼쪽 책등 음영 효과 */}
                  <div className="absolute top-0 left-0 w-6 h-full bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />

                  <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border-4 border-gray-200 shadow-inner">
                    <img
                      src={`/storyboard/story-${storyIndex + 1}.jpeg`}
                      alt={`스토리 ${storyIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-3xl text-gray-800 font-bold text-center leading-relaxed mt-6 px-4">
                    {storyPages[storyIndex]}
                  </p>

                  {/* 장식용 종이 질감 느낌 (선택사항) */}
                  <div className="w-full h-1 bg-gray-50 mt-4 rounded-full" />
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 하단 버튼 영역 */}
          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={handleStoryNext}
              disabled={isFlipping}
              className="h-20 px-16 text-2xl bg-purple-600 hover:bg-purple-700 text-white shadow-xl active:scale-95 transition-all rounded-2xl"
            >
              {storyIndex === storyPages.length - 1
                ? "퀴즈 풀러 가기"
                : "다음 페이지"}
              <ChevronRight className="ml-3 h-8 w-8" />
            </Button>
          </div>
        </div>
      </main>
    );
  }

  // Quiz Questions
  if (step === "quiz") {
    const currentQuiz = quizData[quizIndex];
    const userAnswer = userAnswers[quizIndex];
    const isCorrect = userAnswer === currentQuiz.answer;

    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="w-full max-w-4xl">
          <div className="mb-6 text-center">
            <span className="text-3xl font-semibold text-purple-700">
              문제 {quizIndex + 1} / {quizData.length}
            </span>
          </div>
          <Card className="p-10 bg-white shadow-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-10 leading-relaxed text-balance">
              {currentQuiz.question}
            </h2>

            {!showFeedback ? (
              <>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <Button
                    size="lg"
                    onClick={() => handleAnswer(true)}
                    className="h-32 text-6xl font-bold bg-green-500 hover:bg-green-600 text-white rounded-2xl"
                  >
                    O
                  </Button>
                  <Button
                    size="lg"
                    onClick={() => handleAnswer(false)}
                    className="h-32 text-6xl font-bold bg-red-500 hover:bg-red-600 text-white rounded-2xl"
                  >
                    X
                  </Button>
                </div>

                <div className="text-center">
                  <Button
                    variant="outline"
                    onClick={() => setShowHint(!showHint)}
                    className="bg-transparent h-14 px-8 text-xl"
                  >
                    {showHint ? "힌트 숨기기" : "힌트 보기"}
                  </Button>
                  {showHint && (
                    <p className="mt-6 text-2xl text-blue-600 bg-blue-50 p-6 rounded-lg">
                      💡 {currentQuiz.hint}
                    </p>
                  )}
                </div>
              </>
            ) : (
              <div className="space-y-6">
                <div
                  className={`p-8 rounded-xl ${
                    isCorrect
                      ? "bg-green-100 border-2 border-green-500"
                      : "bg-red-100 border-2 border-red-500"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                        <span className="text-3xl font-bold text-green-600">
                          정답입니다!
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-10 w-10 text-red-600" />
                        <span className="text-3xl font-bold text-red-600">
                          오답입니다!
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-2xl text-gray-700 leading-relaxed">
                    {currentQuiz.explanation}
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button
                    size="lg"
                    onClick={handleNextQuestion}
                    className="h-20 px-16 text-2xl bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {quizIndex < quizData.length - 1
                      ? "다음 문제"
                      : "결과 보기"}
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </main>
    );
  }

  // Results Page
  if (step === "results") {
    const score = calculateScore();

    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
        <Card className="p-12 max-w-4xl w-full bg-white shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              퀴즈 완료!
            </h1>
            <p className="text-3xl font-semibold text-purple-600">
              {quizData.length}문제 중 {score}개 정답!
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {quizData.map((quiz, index) => {
              const userAnswer = userAnswers[index];
              const isCorrect = userAnswer === quiz.answer;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-xl border-2 ${
                    isCorrect
                      ? "bg-green-50 border-green-500"
                      : "bg-red-50 border-red-500"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {isCorrect ? (
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                      ) : (
                        <XCircle className="h-10 w-10 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-2xl font-medium text-gray-900 mb-3">
                        {index + 1}. {quiz.question}
                      </p>
                      <div className="flex gap-6 text-xl">
                        <span className="font-semibold text-gray-700">
                          정답: {quiz.answer ? "O" : "X"}
                        </span>
                        <span className="font-semibold text-gray-700">
                          내 답:{" "}
                          {userAnswer === null ? "-" : userAnswer ? "O" : "X"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={resetQuiz}
              className="h-20 px-16 text-2xl bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Home className="mr-2 h-8 w-8" />
              처음으로
            </Button>
          </div>
        </Card>
      </main>
    );
  }

  return null;
}
