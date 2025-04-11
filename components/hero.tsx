import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Phone } from "lucide-react"
import Link from "next/link" // Link 컴포넌트 추가

export default function Hero() {
  return (
    <section id="about" className="py-16 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#03c75a] opacity-5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#03c75a] opacity-5 rounded-full -ml-24 -mb-24"></div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-block px-4 py-1 bg-[#e8f5e9] text-[#03c75a] rounded-full text-sm font-medium mb-4">
            백엔드 개발자
          </div>
          <h1 className="text-4xl font-bold mb-4">
            안녕하세요,{" "}
            <span className="text-[#03c75a] relative">
              4년차 개발자
              <span className="absolute bottom-0 left-0 w-full h-2 bg-[#03c75a] opacity-20"></span>
            </span>{" "}
            조성신입니다.
          </h1>
          <p className="text-lg text-gray-700 mb-6">서비스 운영 경험을 갖춘 실용주의 백엔드 개발자</p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
                href="mailto:sungsin1030@gmail.com"
                className="inline-flex items-center justify-center px-4 py-2 bg-[#03c75a] hover:bg-[#02a64d] text-white rounded-md font-medium shadow-md hover:shadow-lg transition-all"
            >
              <Mail className="mr-2 h-4 w-4" />
              <span>이메일 보내기</span>
            </Link>
            <Link href="https://github.com/DevSung" target="_blank" rel="noopener noreferrer">
              <Button
                  variant="outline"
                  className="border-[#03c75a] text-[#03c75a] hover:bg-[#e8f5e9] shadow-md hover:shadow-lg transition-all"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub 방문하기
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-3 bg-gray-50 p-4 rounded-lg border-l-4 border-[#03c75a]">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-[#03c75a]" />
              <span className="font-medium">sungsin1030@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-[#03c75a]" />
              <span className="font-medium">+8210-2890-9924</span>
            </div>
            <div className="flex items-center">
              <Github className="h-5 w-5 mr-3 text-[#03c75a]" />
              <span className="font-medium">https://github.com/DevSung</span>
            </div>
          </div>
        </div>
        <Card className="bg-white shadow-xl border-none relative z-10">
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#03c75a] opacity-10 rounded-full -mr-8 -mt-8"></div>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#03c75a] flex items-center">
              <span className="inline-block w-2 h-8 bg-[#03c75a] mr-3"></span>
              자기소개
            </h2>
            <p className="text-gray-800 text-lg whitespace-pre-line leading-relaxed font-medium">
              외식업계에서 4년, 스타트업 운영팀에서 1년 동안 일하며 고객 응대, 팀 협업, 프로젝트 운영 경험을 쌓았습니다.
              서비스를 제공하고 운영하는 입장에서 더 나아가, 직접 만들고 개선하고 싶다는 마음으로 개발자가 되었고,
              현재는 JPA와 QueryDSL을 활용한 백엔드 개발을 하고 있습니다. 중복을 줄이고, 읽기 쉽고 간결한 코드를
              중요하게 생각합니다. 단순히 기능을 만드는 것이 아니라, 사용자부터 운영, 기획, 개발까지 다양한 입장을
              고려한 실용적인 솔루션을 만드는 걸 목표로 하고 있습니다. 변화에 빠르게 적응하고, 다양한 팀과의 협업 경험을
              바탕으로 소통하며 함께 문제를 해결해 나가는 데 강점이 있습니다. 이런 과정 속에서 더 나은 서비스를 만드는
              개발자로 계속 성장하고 있습니다.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
