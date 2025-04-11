import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "QueryDsl", "Spring Data JPA", "MyBatis", "Kafka", "Spring Batch", "Gradle"],
  },
  {
    title: "DevOps",
    skills: ["MySQL", "Git", "Jenkins", "GitLab", "AWS", "Docker", "K8s", "GitHub"],
  },
  {
    title: "Frontend",
    skills: ["JavaScript", "JSP", "Vue.js", "JSTL", "jQuery", "Ajax", "Bootstrap"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="flex items-center mb-10">
        <div className="h-1 w-10 bg-[#03c75a] mr-4"></div>
        <h2 className="text-3xl font-bold text-[#03c75a]">기술 스택</h2>
        <div className="h-1 flex-grow bg-gray-100 ml-4"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <CardHeader
              className={`pb-2 ${
                index === 0
                  ? "bg-gradient-to-r from-[#e8f5e9] to-[#c8e6c9]"
                  : index === 1
                    ? "bg-gradient-to-r from-[#e3f2fd] to-[#bbdefb]"
                    : "bg-gradient-to-r from-[#fff8e1] to-[#ffecb3]"
              }`}
            >
              <CardTitle className="text-xl flex items-center">
                {index === 0 ? (
                  <span className="inline-block w-8 h-8 mr-2 rounded-full bg-[#03c75a] text-white flex items-center justify-center">
                    B
                  </span>
                ) : index === 1 ? (
                  <span className="inline-block w-8 h-8 mr-2 rounded-full bg-[#4a94e1] text-white flex items-center justify-center">
                    D
                  </span>
                ) : (
                  <span className="inline-block w-8 h-8 mr-2 rounded-full bg-[#f1c40f] text-white flex items-center justify-center">
                    F
                  </span>
                )}
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className={`${
                      index === 0
                        ? "bg-[#03c75a] hover:bg-[#02a64d]"
                        : index === 1
                          ? "bg-[#4a94e1] hover:bg-[#3a84d1]"
                          : "bg-[#f1c40f] hover:bg-[#e1b400]"
                    } text-white font-medium px-3 py-1 rounded-full transition-all`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
