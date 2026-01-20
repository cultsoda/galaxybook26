import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          GalaxyBook26 Event
        </h1>
        <p className="text-xl text-gray-600">이벤트를 선택해 주세요</p>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-md">
        <Link href="/luckydraw" className="w-full">
          <Button
            size="lg"
            className="w-full h-24 text-3xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            럭키드로우
          </Button>
        </Link>

        <Link href="/storyboard" className="w-full">
          <Button
            size="lg"
            className="w-full h-24 text-3xl font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            스토리보드 퀴즈
          </Button>
        </Link>
      </div>
    </main>
  );
}
