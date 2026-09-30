/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import '../styles/about.css'

const imageAltText = "purple and blue abstract background";

/**
 * Short description that expands on your title on the Home component.
 */
const description =
  "Hi! I'm an MBA student at IIT Roorkee and an Electronics & Communication engineer from UIET, Kurukshetra University. I moved from studying circuits to building and securing cloud systems, and now I combine product thinking, data analytics and cloud with a focus on tech consulting, AI & data governance and digital transformation.";

/**
 * List of skills or technologies you work on, are learning,
 * passionate about, or enjoy. (Also shown on the Home component.)
 */
export const skillsList = [
  "Product Management",
  "Business Analytics",
  "Cloud Computing",
  "Data Governance",
  "SQL & Excel",
  "Problem Solving",
];

/**
 * Education (from CV)
 */
const educationList = [
  "MBA, Indian Institute of Technology, Roorkee (2026 - 2028)",
  "B.Tech (EC&C), UIET, Kurukshetra University (2021 - 2025), 68.30%",
];

/**
 * Certifications (from CV)
 */
const certificationList = [
  "Oracle Database SQL Certified Associate 1Z0-071 (Udemy), 2026",
  "Microsoft Excel: Beginner to Advanced + AI (Udemy), 2026",
];

/**
 * Positions of responsibility (from CV)
 */
const leadershipList = [
  "Microsoft Learn Student Ambassador (Beta), Sep '23 - Jul '25: sessions on Azure, AKS and cloud infra optimization for 450+ students; global community of 4000+ students",
  "Incubation Head, Community Incubation Centre, Feb '24 - Oct '24: managed incubation and pre-incubation of startups, negotiated a key MoU with I Cell, NIT Kurukshetra, and managed 15+ events for 700+ students",
  "Led a team of 35+ for the University's techno-cultural event for 2500+ students (2025)",
  "1st position in Problem Identifying & Solving for Govt. Institutes among 45+ teams (2023)",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote.
 */
const detailOrQuote =
  "Let's connect for discussions on technology, innovation, and professional growth.              Let's 🌱🚀 #TechConsulting #DataGovernance #CloudStrategy";

const About = () => {
  return (
    <section className="padding" id="about">
      <div className="about-container">
        <h2 style={{ textAlign: "center" }}>About Myself</h2>
        <p className="large">{description}</p>

        <hr />
        <h3>Education</h3>
        <ul>
          {educationList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>Certifications</h3>
        <ul>
          {certificationList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>Positions of Responsibility &amp; Achievements</h3>
        <ul>
          {leadershipList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <hr />
        <p className="large">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
