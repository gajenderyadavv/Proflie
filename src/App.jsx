import React from 'react';
import './styles.css';

export default function App() {
  return (
    <div className="portfolio-container">
      {/* Header / Navigation */}
      <header className="navbar">
        <div className="logo">Portfolio</div>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Ventures</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Bridging Technology & Business Strategy</h1>
        <p>
          MBA Candidate at DoMS, IIT Roorkee | Ex-Incubation Head | Combining deep technical architecture with data-driven product strategy.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn primary">Explore Ventures</a>
          <a href="#contact" className="btn secondary">Get in Touch</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>Professional Profile</h2>
        <p>
          Equipped with a Bachelor of Technology in Electronics and Communication Engineering and advanced management training from IIT Roorkee. Specialized in scaling technical products, cloud infrastructure, and market entry strategies for emerging technologies.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2>Leadership & Experience</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Incubation Head</h3>
            <p className="subtext">Community Incubation Centre, UIET</p>
            <p>Spearheaded startup acceleration programs, drafted institutional MOUs, and mentored early-stage tech founders.</p>
          </div>
          <div className="card">
            <h3>Student Ambassador</h3>
            <p className="subtext">Microsoft Learn</p>
            <p>Advocated DevSecOps practices and Generative AI frameworks across student developer communities.</p>
          </div>
        </div>
      </section>

      {/* Projects & Ventures */}
      <section id="projects" className="section">
        <h2>Strategic Ventures & Projects</h2>
        <div className="card-grid">
          <div className="card">
            <h3>RapidKart</h3>
            <p className="subtext">Quick-Commerce Strategy Deck</p>
            <p>Designed market potential analyses, route optimization frameworks, and scalable revenue models targeting Tier-2 and Tier-3 Indian cities.</p>
          </div>
          <div className="card">
            <h3>EVRCS</h3>
            <p className="subtext">IoT-Based Electric Vehicle Remote Charging Station</p>
            <p>Developed a proof of concept reaching Technology Readiness Level 6 (TRL 6) through rigorous field validations.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <h2>Let's Connect</h2>
        <p>Open to opportunities in Technical Product Management and Strategy Consulting.</p>
        <a href="mailto:contact@example.com" className="btn primary">Initiate Contact</a>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} — Built with React & Deployed via GitHub Actions on Azure.</p>
      </footer>
    </div>
  );
}