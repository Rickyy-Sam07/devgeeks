import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "../../stylesheets/TestimonialsSection.scss";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "DevGeeks has been an incredible platform for learning and growing as a developer. The community support and mentorship opportunities are unmatched!",
      clientName: "Sarah Chen",
      companyName: "Frontend Developer",
      avatar: "https://i.pravatar.cc/56?img=1",
    },
    {
      quote:
        "Through DevGeeks, I connected with amazing collaborators and landed my first freelancing project. It's more than just a community - it's a launchpad for careers.",
      clientName: "Alex Rodriguez",
      companyName: "Full Stack Developer",
      avatar: "https://i.pravatar.cc/56?img=2",
    },
    {
      quote:
        "The hackathons and events at DevGeeks pushed me to learn new technologies. I've grown so much as a developer since joining this community.",
      clientName: "Priya Sharma",
      companyName: "ML Engineer",
      avatar: "https://i.pravatar.cc/56?img=3",
    },
  ];

  return (
    <section className="testimonials-container">
      <div className="testimonials-wrapper">
        <h2 className="section-title">What our community says</h2>

        <div className="testimonials-row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <FaQuoteLeft style={{stroke: "black", strokeWidth: 10}} className="quote-icon" />
                <p className="testimonial-quote">"{testimonial.quote}"</p>
              </div>

              <div className="client-info">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.clientName}
                  className="client-avatar"
                />
                <div>
                  <p className="client-name">{testimonial.clientName}</p>
                  <p className="client-company">{testimonial.companyName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
