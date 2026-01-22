import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, BookOpen, ChevronRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0f1c] to-black">
      {/* 배경 장식 요소 */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/20 blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[100px]" />

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-12">
        {/* 헤더 섹션 */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-purple-200 tracking-tight drop-shadow-sm">
            Galaxy Book 6
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light tracking-wide">
            새로운 차원의 AI 경험, 지금 만나보세요
          </p>
        </div>

        {/* 카드 그리드 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* 럭키 드로우 카드 */}
          <Link href="/luckydraw" className="group">
            <Card className="h-full border-0 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 overflow-hidden ring-1 ring-white/10 hover:ring-blue-400/50 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]">
              <CardContent className="p-0 flex flex-col h-full">
                {/* 이미지 영역 (Placeholder) */}
                <div className="h-64 bg-gradient-to-br from-blue-900/50 to-slate-900/50 relative overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <Gift className="w-24 h-24 text-blue-400/80 mb-4" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-6 text-white/90 font-medium tracking-wider">
                    EVENT 01
                  </span>
                </div>
                {/* 텍스트 내용 */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      럭키 드로우
                    </h2>
                    <p className="text-slate-400 leading-relaxed text-lg">
                      화면을 터치하고 행운의 주인공이 되어보세요. <br />
                      다양한 경품이 기다리고 있습니다.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                    참여하기 <ChevronRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* 스토리보드 퀴즈 카드 */}
          <Link href="/storyboard" className="group">
            <Card className="h-full border-0 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 overflow-hidden ring-1 ring-white/10 hover:ring-purple-400/50 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]">
              <CardContent className="p-0 flex flex-col h-full">
                {/* 이미지 영역 (Placeholder) */}
                <div className="h-64 bg-gradient-to-br from-purple-900/50 to-slate-900/50 relative overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <BookOpen className="w-24 h-24 text-purple-400/80 mb-4" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-6 text-white/90 font-medium tracking-wider">
                    EVENT 02
                  </span>
                </div>
                {/* 텍스트 내용 */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      AI 퀴즈 & 스토리
                    </h2>
                    <p className="text-slate-400 leading-relaxed text-lg">
                      책책이와 함께하는 Galaxy Book 6 이야기. <br />
                      스토리를 읽고 퀴즈를 풀어보세요.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center text-purple-400 font-semibold group-hover:translate-x-2 transition-transform">
                    시작하기 <ChevronRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  );
}
