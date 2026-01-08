export default function Experience() {
  const timeline = [
    {
      year: "2026 - Present",
      title: "Front-end Developer",
      organization: "Freelance",
      description: "Building responsive and attractive web interfaces using HTML, CSS, JavaScript, and React.",
    },
    {
      year: "2021 - 2025",
      title: "Web Development Student",
      organization: "OFPPT",
      description: "Focused on mastering web fundamentals, modern UI design, and JavaScript logic.",
    },
    {
      year: "2020 - 2021",
      title: "Self-Taught Developer",
      organization: "Online Learning",
      description: "Started my journey in programming, learning the basics of HTML5 and CSS3 to build simple web pages.",
    },
  ]

  return (
    <section className="experience-section" id="experience">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-organization">{item.organization}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
