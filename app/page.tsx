import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Career from "@/components/career"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Career />
      </main>
      <Footer />
    </div>
  )
}
