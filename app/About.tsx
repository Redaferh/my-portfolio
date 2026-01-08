export default function About() {
  const skills = ["HTML", "CSS", "JavaScript", "React"]

  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-description">
            I'm a passionate front-end developer with a keen eye for creating elegant, user-friendly web experiences. I
            specialize in building responsive, performant applications using modern web technologies.
          </p>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-card">
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
