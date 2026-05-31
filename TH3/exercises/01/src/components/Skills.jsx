function Skills({ skills }) {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Skills</p>
          <h2>Data được truyền vào bằng props</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.name}>
              <div className="skill-card-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="progress-bar" aria-hidden="true">
                <div className="progress-fill" style={{ width: `${skill.level}%` }} />
              </div>
              <p className="skill-category">{skill.category}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
