function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.featured && <span className="featured-badge">⭐ Nổi bật</span>}
      <img src={project.image} alt={project.title} />
      <div className="project-content">
        <span className="project-tag">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="project-tag-chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
