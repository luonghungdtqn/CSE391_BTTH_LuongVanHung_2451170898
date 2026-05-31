import { useState } from 'react';

const projects = [
  { id: 1, title: 'E-Commerce Website', category: 'web', image: 'https://via.placeholder.com/400x300', description: 'Full-stack e-commerce with React and Node.js', tags: ['React', 'Node.js', 'MongoDB'] },
  { id: 2, title: 'Health Tracker App', category: 'mobile', image: 'https://via.placeholder.com/400x300', description: 'Mobile app for tracking fitness goals', tags: ['React Native', 'Firebase'] },
  { id: 3, title: 'Dashboard Admin', category: 'web', image: 'https://via.placeholder.com/400x300', description: 'Admin dashboard with analytics', tags: ['Vue.js', 'Chart.js'] },
  { id: 4, title: 'Portfolio Design', category: 'design', image: 'https://via.placeholder.com/400x300', description: 'Personal portfolio design', tags: ['Figma', 'CSS'] },
];

function ProjectCard({ title, category, image, description, tags }) {
  return (
    <article className={`project-card ${category}`}>
      <img src={image} alt={title} />
      <div className="project-content">
        <span className="project-category">{category}</span>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Portfolio() {
  const [items] = useState(projects);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'web', 'mobile', 'design'];
  const filteredItems = filter === 'all' ? items : items.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="text-center mb-5">My Portfolio</h2>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
