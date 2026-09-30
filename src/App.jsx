import React, { useEffect, useRef } from 'react';
import './styles.css';
import React, { useEffect, useRef } from 'react';
import './styles.css';
import profileImage from './images/developer.jpg'; // <-- Add this import

// Enhanced Apple-style scroll reveal with blur and scale physics
const FadeInSection = ({ children, delay = 0 }) => {
  const domRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className="fade-section" ref={domRef} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default function App() {
  return (
    <div className="apple-layout">
      {/* Frosted Glass Navigation */}
      <nav className="glass-nav">
        <div className="nav-content">
          <span className="brand">Gajender</span>
          <div className="links">
            <a href="#about">Overview</a>
            <a href="#bento-projects">Experience</a>
            <a href="#resume">CV</a>
            <a href="/resume/Gajender_Yadav_DoMS_IIT_Roorkee.pdf" target="_blank" rel="noopener noreferrer" className="btn-nav">
  Resume
</a>
          </div>
        </div>
      </nav>

      {/* Dark "Pro" Hero Section */}
      <section id="about" className="hero-dark">
        <div className="hero-content">
          <FadeInSection delay={0}>
            <div className="avatar-wrapper">
              <img 
                  src={profileImage} 
                  alt="Gajender Yadav" 
                  className="hero-avatar"
              />
            </div>
            
            <h2 className="eyebrow">MBA Candidate at IIT Roorkee</h2>
            <h1 className="hero-title">Engineering solutions.<br/>Driving strategy.</h1>
            <p className="hero-subtitle">
              Specializing in Tech Consulting, AI Governance, Data Governance, Digital Transformation, and Cloud Strategy. Bridging the gap between deep technical execution and high-level business growth.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Apple-Style Unified Light Bento Box for Experience & Projects */}
      <section id="bento-projects" className="content-section white">
        <div className="section-container">
          <FadeInSection>
            <h2 className="section-heading text-center">Hands-on experience.<br/>Real-world impact.</h2>
          </FadeInSection>

          <div className="bento-grid">
            {/* Bento Card 1: Wide */}
            <div className="bento-card bento-wide">
              <FadeInSection>
                <h4 className="bento-category">R&D Engineering Intern</h4>
                <h3>Semi-Conductor Laboratory, Mohali</h3>
                <p className="bento-desc">
                  Modernized legacy infrastructure using IoT, bypassing SECS-GEM ports for data access. Built Python computer vision tools to read equipment monitor data in an air-gapped lab. Implemented data analytics using SciPy, Statsmodels, and Scikit, improving output by 25%.
                </p>
              </FadeInSection>
            </div>

            {/* Bento Card 2: Square */}
            <div className="bento-card">
              <FadeInSection>
                <h4 className="bento-category">Product Architecture</h4>
                <h3>EV Remote Charging</h3>
                <p className="bento-desc">
                  Led a team of 4 to build a cross-platform app for remote EV charging. Integrated UHF-RFID and IoT cloud with a PHP backend, achieving 95% real-time station availability. Drafted the monetization business model.
                </p>
              </FadeInSection>
            </div>

            {/* Bento Card 3: Square */}
            <div className="bento-card">
              <FadeInSection>
                <h4 className="bento-category">Cloud Strategy</h4>
                <h3>AWS EKS & Terraform</h3>
                <p className="bento-desc">
                  Implemented IT Asset Management replacing manual logs, reducing search time by 90% via instant database queries. Provisioned a scalable Kubernetes cluster on AWS EKS using Terraform IaC, reducing deployment time by 70% with 100% reliability.
                </p>
              </FadeInSection>
            </div>

            {/* Bento Card 4: Wide */}
            <div className="bento-card bento-wide">
              <FadeInSection>
                <h4 className="bento-category">Leadership</h4>
                <h3>Incubation & Community</h3>
                <p className="bento-desc">
                  <strong>Incubation Head, UIET:</strong> Scaled incubator pipelines, managed 15+ events for 700+ students, and drafted a key MoU with NIT Kurukshetra.<br/><br/>
                  <strong>Microsoft Learn Student Ambassador:</strong> Conducted sessions on Azure, AKS, and Cloud infrastructure optimization for 450+ students.
                </p>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Resume / CV CTA Section */}
      <section id="resume" className="content-section light-gray">
        <div className="section-container text-center">
          <FadeInSection>
            <h2 className="section-heading">The full picture.</h2>
            <p className="body-text mx-auto" style={{ marginBottom: '2.5rem' }}>
              From a B.Tech in Electronics (UIET, Kurukshetra University) to an MBA at IIT Roorkee. Dive into my complete technical stack, encompassing SQL, Python, Cloud Computing, and Product Management.
            </p>
            <div className="cta-actions">
              <a href="/Gajender_Yadav_DoMS_IIT_Roorkee.pdf" target="_blank" rel="noopener noreferrer" className="btn-apple-primary">
                View Curriculum Vitae
              </a>
              <a href="https://linkedin.com/in/gajenderyadav" target="_blank" rel="noopener noreferrer" className="btn-apple-secondary">
                Connect on LinkedIn
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="apple-footer">
        <div className="section-container">
          <div className="footer-links">
            <a href="mailto:gajenderyadav.iitr@gmail.com">gajenderyadav.iitr@gmail.com</a>
            <span className="divider">|</span>
            <a href="tel:+919667116678">+91-966711-6678</a>
          </div>
          <p className="footer-text">© {new Date().getFullYear()} Gajender Yadav</p>
        </div>
      </footer>
    </div>
  );
}