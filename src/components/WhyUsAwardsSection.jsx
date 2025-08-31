import React from "react";
import { Button } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "../../stylesheets/WhyUsAwardsSection.scss";

const WhyUsAwardsSection = () => {
  const awards = [
    { title: "Community Hub Launch", year: "2025" },
    { title: "Tech Innovation Award", year: "2025" },
    { title: "Best Developer Community", year: "2025" },
    { title: "Rising Stars Platform", year: "2025" },
  ];

  return (
    <section className="whyus-container">
      <div className="whyus-wrapper">
        <div className="content-row">
          {/* Left Content */}
          <div className="left-content">
            <h2 className="section-title">Why DevGeeks?</h2>

            <p className="section-text">
              Collaboration – Work with peers on real-world projects<br/>
              Mentorship – Learn from experienced seniors and industry experts<br/>
              Community – Join a supportive, diverse, and passionate tech family<br/>
              Tech Insights – Stay updated with the latest in-demand technologies<br/>
              Opportunities – Access freelancing gigs, mentorship, and exclusive events
            </p>

            {/* <p className="section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros tristique. Duis cursus, viverra
              ornare, eros dolor interdum nulla.
            </p> */}
            <div className="prize-btn">
              <div className="btn-layer"></div>
              <Button variant="contained" size="large" className="contact-btn">
                Get in touch
              </Button>
            </div>

          </div>

          {/* Right Content */}
          <div className="right-content">
            <h2 className="section-title">Our achievements</h2>

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
