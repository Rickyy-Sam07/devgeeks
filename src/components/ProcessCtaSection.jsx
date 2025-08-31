import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import "../../stylesheets/ProcessCtaSection.scss";
import _p4_ from "../assets/ldk4.png"
import __star__ from "../assets/star.png"
import { RoughNotation } from "react-rough-notation";

const ProcessCtaSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (panel) => {
    setExpanded(expanded === panel ? null : panel);
  };

  const processSteps = [
    {
      id: "panel1",
      title: "01 - Connect",
      content:
        "Join our vibrant community of developers, creators, and tech enthusiasts. Share your projects and connect with like-minded innovators.",
    },
    {
      id: "panel2",
      title: "02 - Collaborate",
      content:
        "Work together on real-world projects, participate in hackathons, and engage in meaningful collaborations that drive innovation forward.",
    },
    {
      id: "panel3",
      title: "03 - Grow",
      content:
        "Access mentorship opportunities, freelancing projects, exclusive events, and stay updated with the latest tech trends to advance your career.",
    },
  ];

  return (
    <>
      <section className="process-container">
        <div className="left-section">
          <img
            className="process-image"
            src={_p4_}
            alt="Team member by Sincerely Media on Unsplash"
          />
        </div>

        <div className="right-section">
          <h2 className="section-title">How DevGeeks works</h2>

          <div className="accordion-list">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className={`accordion ${expanded === step.id ? "expanded" : ""}`}
              >
                <div
                  className="accordion-summary"
                  onClick={() => toggleAccordion(step.id)}
                >
                  <h3 className="accordion-title">{step.title}</h3>
                  <div className="accordion-icon">
                    <AddIcon />
                  </div>
                </div>
                {expanded === step.id && (
                  <div className="accordion-details">
                    <p>{step.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <img src={__star__} alt="Star Icon" className="cta-icon" />
        <div className="cta-content">
          <h1 className="cta-title">
            Ready to join the DevGeeks{" "}
            community {" "}
            <RoughNotation type="underline" show={true} strokeWidth={2}>
              today
            </RoughNotation>?
          </h1>
          <div className="cta-view-btn">
            <div className="btn-layer"></div>
            <Button variant="contained" size="large" className="cta-btn">
              Get in touch
            </Button>
          </div>
          {/* <Button  className="cta-button"> */}

          {/* </Button> */}
        </div>
      </section>
    </>
  );
};

export default ProcessCtaSection;
