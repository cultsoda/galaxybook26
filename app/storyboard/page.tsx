"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, ChevronRight, Home } from "lucide-react";

type Step = "waiting" | "intro" | "story" | "quiz" | "results";

// 애니메이션 스타일 정의 추가
const flipAnimationStyle = `
  @keyframes flip-next {
    0% { transform: rotateY(0deg); opacity: 1; }
    50% { transform: rotateY(-90deg); opacity: 0.5; }
    100% { transform: rotateY(-180deg); opacity: 0; }
  }
  .animate-flip {
    animation: flip-next 0.4s ease-in-out;
    perspective: 1000px;
  }
  .perspective-1000 {
    perspective: 1000px;
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
    question:
      "책책이는 인터넷이나 클라우드 연결 없이도 노트북 안에서 직접 실행되는 '온디바이스(On-device) AI'이다.",
    answer: true,
    hint: "구름(Cloud)과 노트북 중 어디에서 작동하는지 떠올려 보세요.",
    explanation:
      "정답입니다! 책책이는 온디바이스 AI로, 노트북 안에서 직접 작동합니다.",
  },
  {
    question:
      "책책이는 여러 역할을 가진 AI 에이전트들이 협업하는 '에이전틱 AI' 방식으로 작동한다.",
    answer: true,
    hint: "여러 요정이 팀을 이루어 일한다는 내용을 기억하세요.",
    explanation:
      "정답입니다! 여러 AI 에이전트들이 협업하여 작동하는 에이전틱 AI입니다.",
  },
  {
    question:
      "책책이와 나는 대화 내용과 개인적인 독서 취향을 보관할 위해 항상 외부 클라우드 서버로 전송되어 저장된다.",
    answer: false,
    hint: "데이터가 노트북 밖으로 나가는지, 아니면 안에만 머무는지 생각해보세요.",
    explanation:
      "정답입니다! 개인정보는 외부로 전송되지 않고 노트북 안에만 안전하게 보관됩니다.",
  },
  {
    question:
      "책책이가 노트북 안에서 빠르게 마법을 부릴 수 있는 이유는 최신 인텔 Panther Lake 엔진 속의 CPU, GPU, NPU 세 친구가 힘을 합치기 때문이다.",
    answer: true,
    hint: "세 가지 처리 장치가 함께 작동한다는 점을 떠올려 보세요.",
    explanation:
      "정답입니다! CPU, GPU, NPU가 협력하여 빠른 AI 처리를 가능하게 합니다.",
  },
  {
    question:
      "책책이는 딱딱한 텍스트로만 대답하지 않고, 나를 위한 맞춤형 도서 정보를 예쁜 이미지로 생성해서 보여준다.",
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
      setTimeout(() => {
        setStoryIndex(storyIndex + 1);
        setIsFlipping(false);
      }, 400); // 애니메이션 속도에 맞춰 400ms로 변경
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
      <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
          <div className="w-full max-w-3xl aspect-[4/3] rounded-2xl overflow-hidden border-4 border-gray-300">
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
        <Card className="p-12 max-w-2xl text-center bg-white shadow-xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            책책이와 함께하는 AI 퀴즈
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            먼저 책책이의 이야기를 읽어보세요.
            <br />그 다음 5개의 퀴즈를 풀어보세요!
          </p>
          <Button
            size="lg"
            onClick={() => setStep("story")}
            className="h-16 px-12 text-xl bg-purple-600 hover:bg-purple-700 text-white"
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
      <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <style>{flipAnimationStyle}</style> {/* 스타일 주입 */}
        <div className="w-full max-w-3xl">
          <div className="mb-4 text-center">
            <span className="text-xl font-semibold text-purple-700">
              {storyIndex + 1} / {storyPages.length}
            </span>
          </div>
          <div className="perspective-1000">
            {" "}
            {/* 원근감 추가 */}
            <Card
              className={`p-12 bg-white shadow-xl transition-all duration-400 ${
                isFlipping ? "animate-flip" : "transform-none"
              }`}
            >
              <div className="flex flex-col items-center gap-8">
                <div className="w-full max-w-2xl aspect-[3/2] rounded-xl overflow-hidden border-4 border-gray-300">
                  <img
                    src={`/storyboard/story-${storyIndex + 1}.jpeg`}
                    alt={`스토리 ${storyIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-3xl text-gray-800 font-medium text-center leading-relaxed">
                  {storyPages[storyIndex]}
                </p>
              </div>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button
              size="lg"
              onClick={handleStoryNext}
              disabled={isFlipping}
              className="h-16 px-12 text-xl bg-purple-600 hover:bg-purple-700 text-white"
            >
              {storyIndex === storyPages.length - 1
                ? "퀴즈 풀러 가기"
                : "다음 >"}
              <ChevronRight className="ml-2 h-6 w-6" />
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
            <span className="text-2xl font-semibold text-purple-700">
              문제 {quizIndex + 1} / {quizData.length}
            </span>
          </div>
          <Card className="p-10 bg-white shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 leading-relaxed text-balance">
              {currentQuiz.question}
            </h2>

            {!showFeedback ? (
              <>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <Button
                    size="lg"
                    onClick={() => handleAnswer(true)}
                    className="h-24 text-4xl font-bold bg-green-500 hover:bg-green-600 text-white"
                  >
                    O
                  </Button>
                  <Button
                    size="lg"
                    onClick={() => handleAnswer(false)}
                    className="h-24 text-4xl font-bold bg-red-500 hover:bg-red-600 text-white"
                  >
                    X
                  </Button>
                </div>

                <div className="text-center">
                  <Button
                    variant="outline"
                    onClick={() => setShowHint(!showHint)}
                    className="bg-transparent h-12 px-6 text-lg"
                  >
                    {showHint ? "힌트 숨기기" : "힌트 보기"}
                  </Button>
                  {showHint && (
                    <p className="mt-4 text-lg text-blue-600 bg-blue-50 p-4 rounded-lg">
                      💡 {currentQuiz.hint}
                    </p>
                  )}
                </div>
              </>
            ) : (
              <div className="space-y-6">
                <div
                  className={`p-6 rounded-xl ${
                    isCorrect
                      ? "bg-green-100 border-2 border-green-500"
                      : "bg-red-100 border-2 border-red-500"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                        <span className="text-2xl font-bold text-green-600">
                          정답입니다!
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-8 w-8 text-red-600" />
                        <span className="text-2xl font-bold text-red-600">
                          오답입니다!
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {currentQuiz.explanation}
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button
                    size="lg"
                    onClick={handleNextQuestion}
                    className="h-16 px-12 text-xl bg-purple-600 hover:bg-purple-700 text-white"
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
                  className={`p-6 rounded-xl border-2 ${
                    isCorrect
                      ? "bg-green-50 border-green-500"
                      : "bg-red-50 border-red-500"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {isCorrect ? (
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      ) : (
                        <XCircle className="h-8 w-8 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-medium text-gray-900 mb-2">
                        {index + 1}. {quiz.question}
                      </p>
                      <div className="flex gap-4 text-lg">
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
              className="h-16 px-12 text-xl bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Home className="mr-2 h-6 w-6" />
              처음으로
            </Button>
          </div>
        </Card>
      </main>
    );
  }

  return null;
}
