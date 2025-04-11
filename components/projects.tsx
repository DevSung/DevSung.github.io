import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "디시트렌드 룰렛 이벤트",
    company: "프롬에이아이",
    period: "2024.12 - 2025.01",
    description:
      "디시트렌트 이용자들이 뉴스 조회와 투표 참여를 더욱 활성화할 수 있도록 기획된 룰렛 이벤트 프로젝트입니다.",
    tasks: [
      "ERD 설계 및 데이터베이스 구축",
      "룰렛 이벤트 관리 Admin 페이지 개발",
      "참여 횟수, 당첨률 설정, 사용자별 통계 페이지 개발",
      "룰렛 이벤트 관련 RESTful API 개발",
      "룰렛 아이템 당첨시 Redisson을 활용하여 동시성 이슈 처리",
    ],
    tech: [
      "Java 17",
      "Spring Boot",
      "QueryDsl",
      "Gradle",
      "MariaDB",
      "GItHub",
      "Spring Data JPA",
      "Redis",
      "MongoDB",
      "JSP",
    ],
  },
  {
    title: "골프장 신규 ERP",
    company: "스마트스코어",
    period: "2022.10 - 2024.08",
    description:
      "골프장을 위한 신규 ERP 시스템을 개발하여 기존 레거시 시스템을 대체하고, 사용자들의 업무 효율을 대폭 개선한 프로젝트입니다.",
    tasks: [
      "ERD 설계 및 데이터베이스 구축",
      "JdbcTemplate을 사용하여 JPA의 BulkInsert 이슈 개선(성능 90% 개선)",
      "매출, 스코어, 순위 등을 자동으로 계산하는 알고리즘 개발",
      "Spring Batch를 활용한 SMS 및 알림톡을 자동 발송하는 배치 시스템 개발",
      "Query Index Hint를 사용해 JPA 쿼리 성능 개선",
      "매장 POS 시스템과 테이블 태블릿 간 주문 연동 인터페이스를 개발하여 주문 프로세스를 효율화하고 사용자 경험을 개선",
      "WebSocket과 Kafka를 사용하여 실시간 예약 데이터 동기화 시스템 구축",
    ],
    tech: [
      "Java 17",
      "Spring Boot",
      "Spring Batch",
      "QueryDsl",
      "Gradle",
      "Mysql",
      "AWS",
      "GItLab",
      "Kafka",
      "Spring Data JPA",
      "k8s",
    ],
  },
  {
    title: "스마트스코어 & 네이버 아마추어 골프 리그",
    company: "스마트스코어",
    period: "2022.05 - 2022.09",
    description:
      "네이버와 협업하여 아마추어 골퍼들을 위한 리그 시스템을 설계하고 구현했으며, 골퍼 레벨 산정, 대회 개최, 실시간 랭킹 산정 기능을 개발했습니다.",
    tasks: [
      "ERD 설계 및 데이터베이스 구축",
      "최근 라운드 스코어와 핸디캡을 기반으로 선수 등급을 자동으로 할당하는 기능을 개발",
      "JWT 토큰을 활용하여 네이버와 데이터 교환을 위한 인터페이스를 구축",
      "Spring Batch를 활용해 5분 간격으로 실시간 경기 스코어를 업데이트 처리하여, 대회 간 실시간 랭킹을 집계하는 시스템을 개발",
      "Jenkins 배포 환경 구축",
    ],
    tech: [
      "Java 17",
      "Spring Boot",
      "Spring Batch",
      "QueryDsl",
      "Gradle",
      "Mysql",
      "AWS",
      "GItLab",
      "Spring Data JPA",
      "Jenkins",
    ],
  },
  {
    title: "골프 매거진 코리아 고도화 프로젝트",
    company: "스마트스코어",
    period: "2021.12 - 2022.04",
    description:
      "스마트스코어에서 골프 매거진 고도화 프로젝트를 진행하며, 기존의 잡지 기사들을 디지털 잡지로 통합하여 월간호 형태로 제공할 수 있는 기능을 개발했습니다. 또한 잡지 내에서 골프장 예약과 상품 구매가 가능하도록 연동 서비스를 구현했습니다.",
    tasks: [
      "ERD 설계 및 데이터베이스 구축",
      "매거진 생성시 이미지가 많아질 경우 API 속도가 저하될 수 있는 문제를 해결하기 위해, 비동기 처리를 도입하여 사용자 경험을 개선",
      "골프장과 골프용품의 판매 및 예약 기능을 외부 사이트와 원활히 연동하는 API 인터페이스를 설계하고 구현",
      "Jenkins 배포 환경 구축",
    ],
    tech: ["Java 17", "Spring Boot", "QueryDsl", "Gradle", "Mysql", "AWS", "GItLab", "Spring Data JPA", "Jenkins"],
  },
  {
    title: "스마트골퍼 모집 관리 시스템",
    company: "스마트스코어",
    period: "2021.11 - 2021.12",
    description:
      "스마트스코어에서 스마트골퍼를 모집하는 관리 시스템을 개발했습니다. 골퍼들의 설문조사를 통해 총합 점수를 산정하여 스마트골퍼를 선정하는 시스템의 백엔드를 담당했습니다.",
    tasks: [
      "ERD 설계 및 데이터베이스 구축",
      "회원들의 답변을 사전에 코드화된 질문에 기반하여 key:value 형식의 JSON으로 변환하여 데이터베이스에 저장하였으며, 조회시 JSON 데이터를 간편하게 변환하여 활용할 수 있는 API를 개발하여 데이터 관리와 처리의 효율성을 크게 향상시켰습니다.",
      "신청자들의 정보와 답변을 실시간으로 조회하고, 통계 정보를 제공하는 어드민 페이지를 개발하여 데이터 분석과 관리의 효율성을 향상시켰습니다.",
      "Jenkins 배포 환경 구축",
    ],
    tech: ["Java 17", "Spring Boot", "QueryDsl", "Gradle", "Mysql", "AWS", "GItLab", "Spring Data JPA", "Jenkins"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="flex items-center mb-10">
        <div className="h-1 w-10 bg-[#03c75a] mr-4"></div>
        <h2 className="text-3xl font-bold text-[#03c75a]">프로젝트</h2>
        <div className="h-1 flex-grow bg-gray-100 ml-4"></div>
      </div>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  <p className="text-sm text-gray-500">
                    {project.company} | {project.period}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-6 text-gray-700">{project.description}</p>
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-[#03c75a]">주요 업무</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {project.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="text-gray-700">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">기술 스택</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => {
                    // 기술 스택별 색상 지정
                    let bgColor = ""
                    if (tech.includes("Java") || tech.includes("Spring")) {
                      bgColor = "bg-[#5382a1] hover:bg-[#4a7591]" // Java/Spring 계열 - 파란색
                    } else if (tech.includes("Query") || tech.includes("JPA") || tech.includes("Batch")) {
                      bgColor = "bg-[#ea4c89] hover:bg-[#d43c79]" // 쿼리/DB 관련 - 분홍색
                    } else if (tech.includes("Gradle") || tech.includes("Jenkins")) {
                      bgColor = "bg-[#f7b93e] hover:bg-[#e7a92e]" // 빌드 도구 - 노란색
                    } else if (
                      tech.includes("Mysql") ||
                      tech.includes("Maria") ||
                      tech.includes("Mongo") ||
                      tech.includes("Redis")
                    ) {
                      bgColor = "bg-[#4479a1] hover:bg-[#346991]" // 데이터베이스 - 남색
                    } else if (tech.includes("AWS") || tech.includes("k8s") || tech.includes("Docker")) {
                      bgColor = "bg-[#ff9900] hover:bg-[#ef8900]" // 클라우드/인프라 - 주황색
                    } else if (tech.includes("Git")) {
                      bgColor = "bg-[#f05032] hover:bg-[#e04022]" // Git 관련 - 빨간색
                    } else if (tech.includes("JSP") || tech.includes("JS") || tech.includes("Vue")) {
                      bgColor = "bg-[#68a063] hover:bg-[#589053]" // 프론트엔드 - 초록색
                    } else {
                      bgColor = "bg-[#6e6e6e] hover:bg-[#5e5e5e]" // 기타 - 회색
                    }

                    return (
                      <Badge
                        key={techIndex}
                        className={`${bgColor} text-white font-medium px-3 py-1 rounded-full transition-all`}
                      >
                        {tech}
                      </Badge>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
