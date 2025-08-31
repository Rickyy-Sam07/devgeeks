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
            DevGeeks founded in 2025
          </h2>

          <Typography variant="body1" className="paragraph">
            Founded in 2025, DevGeeks is a vibrant hub for developers, indie creators, and tech enthusiasts.
            Here, you can showcase your projects, receive honest feedback, and connect with a supportive community of innovators.
          </Typography>

          <Typography variant="body1" className="paragraph">
            Whether you're building your first app or scaling your dream startup, DevGeeks is your place to learn, grow, and inspire others.
            We believe in learning together, building meaningful projects, collaborating across borders, and inspiring the next generation of makers.
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
