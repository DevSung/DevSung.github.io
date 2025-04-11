import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Briefcase} from "lucide-react"

const careers = [
    {
        company: "지브라브라더스",
        position: "플랫폼개발팀/매니저",
        period: "2025.04 - 재직중",
        description:
            "AI 에이전트 기반의 검색광고 최적화 시스템을 구축·운영하는 마케팅 자동화 전문 애드테크 기업",
        responsibilities: ["Spring Boot 기반의 Rest API 개발", "JPA와 QueryDsl을 사용한 데이터베이스 설계 및 쿼리 최적화"],
    },
    {
        company: "스마트스코어",
        position: "플랫폼개발7팀/매니저",
        period: "2021.11 - 2024.09",
        description:
            "골프 관련 기술과 솔루션을 제공하는 회사로 골프 스코어, 골프장 ERP 서비스의 주요 백엔드 개발을 담당했습니다.",
        responsibilities: ["Spring Boot 기반의 Rest API 개발", "JPA와 QueryDsl을 사용한 데이터베이스 설계 및 쿼리 최적화"],
    },
]

export default function Career() {
    return (
        <section id="career" className="py-16">
            <div className="flex items-center mb-10">
                <div className="h-1 w-10 bg-[#03c75a] mr-4"></div>
                <h2 className="text-3xl font-bold text-[#03c75a]">경력</h2>
                <div className="h-1 flex-grow bg-gray-100 ml-4"></div>
            </div>
            <div className="grid gap-8">
                {careers.map((career, index) => (
                    <Card
                        key={index}
                        className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                        <div
                            className="absolute top-0 left-0 w-32 h-32 bg-[#03c75a] opacity-5 rounded-full -ml-16 -mt-16"></div>
                        <CardHeader className="flex flex-row items-center gap-4 pb-2 border-b">
                            <div className="p-3 rounded-full bg-[#e8f5e9]">
                                <Briefcase className="h-8 w-8 text-[#03c75a]"/>
                            </div>
                            <div>
                                <CardTitle className="text-xl">{career.company}</CardTitle>
                                <p className="text-sm text-gray-500">{career.position}</p>
                            </div>
                            <div
                                className="ml-auto px-3 py-1 bg-[#e8f5e9] text-[#03c75a] rounded-full text-sm font-medium">
                                {career.period}
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-gray-700 mb-6 border-l-4 border-[#03c75a] pl-4 py-2 bg-gray-50 italic">
                                {career.description}
                            </p>
                            <div>
                                <h4 className="font-semibold mb-3 text-[#03c75a] flex items-center">
                                    <span className="inline-block w-2 h-2 rounded-full bg-[#03c75a] mr-2"></span>
                                    주요 업무
                                </h4>
                                <ul className="list-none pl-5 space-y-2">
                                    {career.responsibilities.map((responsibility, respIndex) => (
                                        <li key={respIndex} className="flex items-start">
                                            <span
                                                className="inline-block w-1.5 h-1.5 rounded-full bg-[#03c75a] mr-2 mt-2"></span>
                                            <span>{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
