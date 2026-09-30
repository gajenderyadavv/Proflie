/**
 * Portfolio component
 *
 * Highlights some of your creations: projects, internships and more.
 * Each description is split on '#' and shown as bullet points
 * (keep a '#' at the end of every bullet).
 */

import React from "react";
import styles from "../styles/main.css";
import image from "../images/DevSecOps.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list (updated from CV)
 */
const projectList = [
  {
    title: "Electric Vehicle Remote Charging System (EVRCS)",
    description:
      "Led a team of 4 in the development of a Proof of Concept, to create a cross-platform application.# Navigated for inclusion of idea into UIET, Kurukshetra University's Community Incubation Centre.# Solved problem of live rush feed of EV charging stations and drafted a business model for same.# Integrated UHF-RFID & IoT-based cloud solution with Php backend for 95% of real-time info. to users.# Implemented containerization to deploy both backend and application on ECS, ensuring scalability and reliability.# Finalist among 27+ teams, appreciation by Vice-Chancellor of KU for Idea & PoC Development.#",
    url: "https://www.evrcs.com",
  },
  {
    title: "Physical File Tracking with RFID for Offices",
    description:
      "Implemented IT Asset Management & Data Governance for office records replacing manual logging.# 90% Reduction in Search Time with instant search/database queries to locate internal files.# Built system using SQL for designing & querying Python (Pandas) for analysing & visualization of data.# Designed and provisioned a scalable Kubernetes cluster on AWS EKS using Terraform IaC.# Automated EKS infra using Terraform, reducing deployment time by 70% & ensuring 100% reliability.#",
    // TODO: replace with the actual repository / demo link for this project
    url: "https://github.com/gajenderyadavv",
  },
  {
    title: "Semi-Conductor Laboratory, Mohali (R&D Engineering Intern)",
    description:
      "Automated Fab. Lab's legacy infrastructure, receiving operational efficiency for 90% real-time data.# Implemented digital image processing and OCR using Python & CV, improving data output by 25%.# Automated image processing of equipment's monitor in an Air-gapped lab.# Modernised infra using IoT & different techniques, and bypassed SECS-GEM Port of equipments.# Measurement of Au QC Wafer's thickness in Fabrication lab using Rudolph FEVIID Ellipsometer.#",
    url: "https://www.scl.gov.in",
  },
  {
    title: "Cloud/Home Lab",
    description:
      "Deployed various applications on both cloud and home lab environments, such as Kasm, Portainer, Ant-media server, Nginx (for reverse proxy) and MySQL for databases utilizing Docker and Kubernetes light version i.e K3s. Set up ESXi-Arm, DDNS-Cloudflare, NAS, and a custom DNS service on the home lab Raspberry Pi.#",
    url: "https://red-field-00baf2300.4.azurestaticapps.net/",
  },
  {
    title: "Live Video-Streaming Server",
    description:
      " Developed a system for live streaming using RaspberryPi’s Camera input & efficient Encoding of video frames in HLS.# Containerized the application for EC2 using Docker, including Nginx-RTMP-HTML for streaming management & Node container for the authentication purpose.# Established a RTMP endpoint within the Nginx-RTMP container, linking to an S3 bucket for efficient video file storage.# Utilized CloudFront as a CDN to ensure seamless distribution of transcoded HLS streams to end-users.#",
    url: "https://github.com/gajenderyadavv/live-video-streaming-server.git",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio__container" id="portfolio">
      <h2>Portfolio</h2>

      <div className="project__container">
        {projectList.map((project) => (
          <div className="box" key={project.title}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
            </a>
            {project?.abc?.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px 0px",
                  marginTop: "20px",
                }}
              >
                {project.abc.map((a) => {
                  return (
                    <a
                      key={a.url}
                      href={a.url}
                      style={{ color: "rgb(78, 86, 126)" }}
                    >
                      {a.desc}
                    </a>
                  );
                })}
              </div>
            )}
            <p className="small">
              {project.description
                .split("#")
                .slice(0, -1)
                .map((str, index) => {
                  return (
                    <ul key={index}>
                      <li>{str}</li>
                    </ul>
                  );
                })}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
