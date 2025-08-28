import React from "react";
import "../../stylesheets/HeroSection.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "@mui/material";
import __hi__ from "../assets/hi.png";
import __curvy__ from "../assets/curvy.png";


const HeroSection = () => {
  return (
    <div className="hero">
      {/* Left Sidebar - Full Height */}
      <div className="sidebar">
        <button className="menu-btn">☰</button>
        <div className="line"></div>
        <div className="social">
          <div className="social-item">
            <div className="layer layer-x"></div> {/* Shadow layer */}
            <button id="x">♡</button>
          </div>
          <div className="social-item">
            <div className="layer layer-g"></div>
            <button id="github">f</button>
          </div>
          <div className="social-item">
            <div className="layer layer-i"></div>
            <button id="insta">@</button>
          </div>
        </div>
      </div>

      {/* Content Area (Navbar + Main + Partners) */}
      <div className="content-area">
        {/* Navbar */}
        <div className="navbar">
          <h1 className="logo">DEVGEEKS.</h1>
          <div className="book_a_call_sectio">
            <div className="c"></div> {/* Background layer */}
            <button id="book-a-call-btn">
              <FaPhoneAlt style={{ verticalAlign: 'middle', marginLeft: '4px' }} />
            </button>
            <span>BOOK A CALL</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="main">
          {/* Left Section */}
          <div className="left">
            <div className="content">
              <div className="emoji">
                <img src={__hi__} alt="Hi" style={{filter:'brightness(1)'}} />
              </div>
              <h1 className="title">
                We&apos;re a creative{" "}
                <span className="underline">
                  design
                  <img id="curvy" src={__curvy__} alt="Curvy" />
                </span> agency
              </h1>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros duis cursus, libero quis viverra
                ornare.
              </p>
              <div className="model-layer-btn">
                <div className="layer-3d-cta-btn"></div>
              <Button className="cta-btn">Get in touch</Button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="right"></div>
        </div>

        {/* Partners Strip */}
        <div className="partners">
          <div className="partners-content">
            <p className="text">Partners who trust us</p>

            <div className="partners-logo">
              <div className="partner">
              <div className="icon square">M</div>
              <span>Minty</span>
            </div>

            <div className="partner">
              <div className="icon diamond"></div>
              <span>Border</span>
            </div>

            <div className="partner">
              <div className="icon circle"></div>
              <span>Product.</span>
            </div>

            <div className="partner">
              <div className="icon trapezoid"></div>
              <span>Glossy</span>
            </div>

            <div className="partner">
              <div className="icon invert"></div>
              <span>Invert</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;