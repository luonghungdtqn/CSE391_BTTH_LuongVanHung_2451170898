function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">React Components Setup</p>
          <h1>
            Hi, I'm <span className="highlight">Lương Văn Hưng</span>
          </h1>
          <p className="hero-subtitle">
            I build clean interfaces, practical UI systems, and portfolios that feel alive.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#portfolio">
              View My Work
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-card">
          <p className="hero-card-label">Focus</p>
          <ul>
            <li>Component structure</li>
            <li>Props passing</li>
            <li>Reusable UI</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
