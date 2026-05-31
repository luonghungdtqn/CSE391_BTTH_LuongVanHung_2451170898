import { useState } from "react";
import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "web", "mobile", "design"];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Portfolio</p>
          <h2>Render danh sách bằng .map() + filter</h2>
        </div>

        <div className="filter-bar" aria-label="Portfolio filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={filter === category ? "filter-btn active" : "filter-btn"}
              onClick={() => setFilter(category)}
            >
              {category === "all"
                ? "All"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="empty-state">Chưa có project phù hợp.</div>
        ) : (
          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <p className="portfolio-stats">Tổng dự án: {filteredProjects.length}</p>
      </div>
    </section>
  );
}

export default Portfolio;
