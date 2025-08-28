import React from "react";
import "../../stylesheets/PortfolioSection.scss";
import { Button } from '@mui/material';
import _p1_ from "../assets/ldk.png";
import _p2_ from "../assets/ldk2.png";
import _p3_ from "../assets/ldk3.png";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Rogahn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros tristique, duis cursus, mi quis viverra ornare.",
      tags: ["Web design", "Website"],
      image:
            `${_p1_}`,
      bgColor: "#C9BFFE",
      headerColor: "#F8C8DC",
      reverse: false,
    },
    {
      title: "Schultz",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros tristique, duis cursus, mi quis viverra ornare.",
      tags: ["UI/UX Design", "Design"],
      image:
        `${_p2_}`,
      bgColor: "#FCE4C5",
      headerColor: "#F8C8DC",
      reverse: true,
    },
    {
      title: "Gohan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros tristique, duis cursus, mi quis viverra ornare.",
      tags: ["Branding Design", "Design"],
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
