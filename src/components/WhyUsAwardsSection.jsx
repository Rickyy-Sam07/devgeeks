import React from "react";
import { Button } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "../../stylesheets/WhyUsAwardsSection.scss";

const WhyUsAwardsSection = () => {
  const awards = [
    { title: "Website of the Year", year: "2022" },
    { title: "Webdesign Award", year: "2021" },
    { title: "Website of the Year", year: "2020" },
    { title: "Webdesign Award", year: "2018" },
  ];

  return (
    <section className="whyus-container">
      <div className="whyus-wrapper">
        <div className="content-row">
          {/* Left Content */}
          <div className="left-content">
            <h2 className="section-title">Why us?</h2>

            <p className="section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros tristique. Duis cursus, viverra
              ornare, eros dolor interdum nulla.
            </p>

            <p className="section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros tristique. Duis cursus, viverra
              ornare, eros dolor interdum nulla.
            </p>
            <div className="prize-btn">
              <div className="btn-layer"></div>
              <Button variant="contained" size="large" className="contact-btn">
                Get in touch
              </Button>
            </div>

          </div>

          {/* Right Content */}
          <div className="right-content">
            <h2 className="section-title">Our awards</h2>

            <div className="awards-container">
              {awards.map((award, index) => (
                <div key={index} className="award-item">
                  <div className="award-title">
                    <FiberManualRecordIcon className="award-dot" />
                    <span className="award-name">{award.title}</span>
                  </div>
                  <span className="award-year">{award.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsAwardsSection;
