import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "../../stylesheets/TestimonialsSection.scss";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      clientName: "Client Name",
      companyName: "Company Name",
      avatar: "https://i.pravatar.cc/56?img=1",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      clientName: "Client Name",
      companyName: "Company Name",
      avatar: "https://i.pravatar.cc/56?img=2",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      clientName: "Client Name",
      companyName: "Company Name",
      avatar: "https://i.pravatar.cc/56?img=3",
    },
  ];

  return (
    <section className="testimonials-container">
      <div className="testimonials-wrapper">
        <h2 className="section-title">What our clients say</h2>

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
