import React from "react";
import { Button } from "@mui/material";
import "../../stylesheets/BlogFooterSection.scss";

const BlogFooterSection = () => {
  const blogPosts = [
    {
      title: "Build a stronger brand with no-code tools",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      bgColor: "bg-1",
      graphic: "graphic-1",
    },
    {
      title: "How marketers can work better with design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      bgColor: "bg-2",
      graphic: "graphic-2",
    },
    {
      title: "A guide to photography website design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      bgColor: "bg-3",
      graphic: "graphic-3",
    },
  ];

  const footerLinks = {
    pages: [
      "Home 01",
      "Contact 01",
      "Home 02",
      "Contact 02",
      "Home 03",
      "Contact 03",
      "About 01",
      "Packages",
      "About 02",
      "Portfolio",
      "About 03",
      "Blog",
    ],
    utility: [
      "Instructions",
      "Style Guide",
      "Licenses",
      "Changelog",
      "404 Not Found",
      "Password Protected",
    ],
  };

  return (
    <>
      {/* Blog Section */}
      <section className="blog-container">

        <div className="blog-header">
          <h2>Our latest articles & resources</h2>
          <div className="footer-view-btn">
            <div className="btn-layer"></div>
            <Button variant="contained" size="large" className="btn-dark">
              All posts
            </Button>
          </div>
        </div>

        <div className="blog-cards">
          {blogPosts.map((post, index) => (
            <div className="g-card-container">
              <div className="card-3d-layer"></div>
              <div key={index} className={`blog-card ${post.bgColor}`}>
                <div className={`blog-graphic ${post.graphic}`} />
                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-container">
        <div className="footer-content">
          {/* Left column */}
          <div className="footer-about">
            <h3>DEVGEEKS.</h3>
            <p>
              Stand out from all the creative agencies out there with Wejoy. A
              premium creative design agency Webflow Template that features a
              fun and immersive design to impress your visitors.
            </p>

            <h4>Subscribe to our newsletter</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <Button variant="contained" className="btn-light">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Pages */}
          <div className="footer-links">
            <h4>Pages</h4>
            <div className="link-columns">
              <div className="link-col">
                {footerLinks.pages.slice(0, 6).map((link, idx) => (
                  <a key={idx} href="#">
                    {link}
                  </a>
                ))}
              </div>
              <div className="link-col">
                {footerLinks.pages.slice(6).map((link, idx) => (
                  <a key={idx} href="#">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Utility */}
          <div className="footer-links">
            <h4>Utility Pages</h4>
            <div className="link-col">
              {footerLinks.utility.map((link, idx) => (
                <a key={idx} href="#">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© DEVGEEKS. — All Rights Reserved</p>
          <p>Made by <a href="https://rudyy.tech" target="_blank" style={{color:'#fff'}} rel="noopener noreferrer">~ Rudra</a> ❤️</p>
        </div>
      </footer>
    </>
  );
};

export default BlogFooterSection;
