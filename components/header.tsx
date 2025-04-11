"use client"

import { useState } from "react"
import {Menu, Bell, ShoppingBag, X, Download} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false) // Close mobile menu if open

    const element = document.getElementById(sectionId)
    if (element) {
      // Smooth scroll to the element
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header height
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <button onClick={() => scrollToSection("about")} className="flex items-center">
            <span className="text-2xl font-bold text-[#03c75a]">DevSung</span>
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection("about")} className="font-medium hover:text-[#03c75a]">
            소개
          </button>
          <button onClick={() => scrollToSection("projects")} className="font-medium hover:text-[#03c75a]">
            프로젝트
          </button>
          <button onClick={() => scrollToSection("skills")} className="font-medium hover:text-[#03c75a]">
            기술 스택
          </button>
          <button onClick={() => scrollToSection("education")} className="font-medium hover:text-[#03c75a]">
            교육
          </button>
          <button onClick={() => scrollToSection("career")} className="font-medium hover:text-[#03c75a]">
            경력
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <Button className="bg-[#03c75a] hover:bg-[#02a64d] text-white">
            <Download className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">다운로드</span>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-white">
          <nav className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection("about")} className="text-lg font-medium text-left">
              소개
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-lg font-medium text-left">
              프로젝트
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-lg font-medium text-left">
              기술 스택
            </button>
            <button onClick={() => scrollToSection("education")} className="text-lg font-medium text-left">
              교육
            </button>
            <button onClick={() => scrollToSection("career")} className="text-lg font-medium text-left">
              경력
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
