import Hero from "@/components/portfolio/Hero"
import About from "@/components/portfolio/About"
import Experience from "@/components/portfolio/Experience"
import Projects from "@/components/portfolio/Projects"
import Contact from "@/components/portfolio/Contact"
import "@/styles/portfolio.css"

export default function Portfolio() {
  return (
    <main className="portfolio-container">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
