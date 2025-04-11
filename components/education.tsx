import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"

const educations = [
  {
    institution: "한국방송통신대학교",
    degree: "컴퓨터과학과 학사",
    period: "2022.08 - 2024.08",
    icon: GraduationCap,
  },
  {
    institution: "중앙정보처리학원",
    degree: "디지털데이터융합 JAVA 응용SW개발자 전문과정",
    period: "2021.04 - 2021.09",
    icon: BookOpen,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="flex items-center mb-10">
        <div className="h-1 w-10 bg-[#03c75a] mr-4"></div>
        <h2 className="text-3xl font-bold text-[#03c75a]">교육</h2>
        <div className="h-1 flex-grow bg-gray-100 ml-4"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {educations.map((education, index) => (
          <Card
            key={index}
            className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#03c75a] opacity-10 rounded-full -mr-10 -mt-10"></div>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 rounded-full bg-[#e8f5e9]">
                <education.icon className="h-8 w-8 text-[#03c75a]" />
              </div>
              <div>
                <CardTitle className="text-xl">{education.institution}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 font-medium">{education.degree}</p>
              <p className="text-sm text-gray-500 mt-2 flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-[#03c75a] mr-2"></span>
                {education.period}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
