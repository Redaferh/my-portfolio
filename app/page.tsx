import Hero from "./Hero"
import About from "./About"
import Experience from "./Experience"
import Projects from "./Projects"
import Contact from "./Contact"
import "./portfolio.css"                          


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
