import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import "../../stylesheets/AboutSection.scss";
import __girl__ from "../assets/girl.png";

const AboutSection = () => {
  return (
    <section className="about-container">
      <Stack direction="row" className="about-wrapper">

        {/* Left Section */}
        <div className="left-section">
          <div className="blob">
            <img
              className="team-image"
              src={__girl__}
              alt="Team member smiling"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h2 className='title'>
            Our agency started back in 2010
          </h2>

          <Typography variant="body1" className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </Typography>

          <Typography variant="body1" className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
          </Typography>

          <div className="about-btn">
            <div className="btn-layer"></div>
            <Button size="large" className="about-btn">
              About us
            </Button>
          </div>

        </div>
      </Stack>
    </section>
  );
};

export default AboutSection;
