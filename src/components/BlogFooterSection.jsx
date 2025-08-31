import React from "react";
import { Button } from "@mui/material";
import "../../stylesheets/BlogFooterSection.scss";

const BlogFooterSection = () => {
  const blogPosts = [
    {
      title: "Building Your First Open Source Project",
      description:
        "Learn how to start contributing to open source projects and build your developer portfolio with real-world experience and community collaboration.",
      bgColor: "bg-1",
      graphic: "graphic-1",
    },
    {
      title: "The Future of AI in Software Development",
      description:
        "Explore how artificial intelligence is transforming the way we write code, from automated testing to intelligent code completion and beyond.",
      bgColor: "bg-2",
      graphic: "graphic-2",
    },
    {
      title: "DevOps Best Practices for Modern Teams",
      description:
        "Discover essential DevOps practices that help development teams deploy faster, more reliably, and with greater confidence in today's tech landscape.",
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
              A vibrant hub for developers, indie creators, and tech enthusiasts founded in 2025.
              Join our community to showcase projects, receive feedback, and connect with innovators
              building the next generation of technology.
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

          {/* Social Links */}
          <div className="footer-links">
            <h4>Follow Us</h4>
            <div className="link-col">
              <a href="https://www.linkedin.com/groups/14694232/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://www.youtube.com/@DevGeeks_Community" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
              <a href="https://www.instagram.com/devgeeks_000?igsh=MTFobndnbXBzcW83eA%3D%3D" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
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
