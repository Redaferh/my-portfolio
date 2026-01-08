export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "My personal website built from scratch to display my professional journey and front-end projects.",
      tech: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Interactive Landing Page",
      description: "A fully responsive landing page with modern UI elements and smooth scrolling.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Modern Web App",
      description: "A functional web application focusing on clean component structure and user experience.",
      tech: ["React", "Javascript", "CSS"],
    },
    {
      title: "Portfolio Website",
      description: "A collection of reusable UI components like buttons modals and navbars."
      tech: ["HTML", "CSS", "JavaScript"]
    },
  ]

  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
