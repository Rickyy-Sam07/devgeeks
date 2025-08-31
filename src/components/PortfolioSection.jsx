import React from "react";
import "../../stylesheets/PortfolioSection.scss";
import { Button } from '@mui/material';
import _p1_ from "../assets/ldk.png";
import _p2_ from "../assets/ldk2.png";
import _p3_ from "../assets/ldk3.png";

const PortfolioSection = () => {
  const projects = [
    {
      title: "EcoTrack",
      description:
        "A mobile app for tracking carbon footprint with AI-powered recommendations. Built by our community members during a hackathon using React Native and machine learning.",
      tags: ["Mobile App", "AI/ML"],
      image:
            `${_p1_}`,
      bgColor: "#C9BFFE",
      headerColor: "#F8C8DC",
      reverse: false,
    },
    {
      title: "DeFi Dashboard",
      description:
        "A comprehensive blockchain-based DeFi portfolio tracker with real-time analytics. Developed by our community as an open-source project.",
      tags: ["Blockchain", "Web3"],
      image:
        `${_p2_}`,
      bgColor: "#FCE4C5",
      headerColor: "#F8C8DC",
      reverse: true,
    },
    {
      title: "DevMentor",
      description:
        "A mentorship platform connecting junior developers with industry experts. Created collaboratively by DevGeeks community members to solve real problems.",
      tags: ["Web Development", "Community"],
      image:
        `${_p3_}`,
      bgColor: "#D5F9DD",
      headerColor: "#F4D4C7",
      reverse: false,
    },
  ];

  return (
    <section className="portfolio-container">
      <div className="portfolio-wrapper">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-row ${project.reverse ? "reverse" : ""}`}
          >
            {/* Project Content */}
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>

              <div className="tags-container">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
                <div className="portfolio-btn">
                            <div className="btn-layer"></div>
                            <Button className="view-btn">
                              View Project
                            </Button>
                          </div>
              {/* <button className="view-btn"></button> */}
            </div>

            {/* Project Visual */}
            <div
              className="project-visual"
              style={{ backgroundColor: project.bgColor }}
            >
              <img
                  className="project-image"
                  src={project.image}
                  alt={`${project.title} project`}
                />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
