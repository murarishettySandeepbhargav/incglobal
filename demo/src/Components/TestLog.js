import React from "react";
import "./TestLog.css";

const testimonials = [
  {
    logo: "https://storage.googleapis.com/kl-website-432404.appspot.com/assets//testi1_d1f576f70e/testi1_d1f576f70e.png", // Replace with actual image URL
    text: "Collaborating with Incglobal, we are also getting new, innovative ideas that we could implement from our side to improve our business.",
    author: "The Despatch Rider",
  },
  {
    logo: "https://storage.googleapis.com/kl-website-432404.appspot.com/assets//testi3_f7767421c7/testi3_f7767421c7.png", // Replace with actual image URL
    text: "It's been 3 years with Incglobal, and they consistently give us better results. Their innovation in design, content, and lead generation sets them apart.",
    author: "Gem Plast",
  },
  {
    logo: "https://storage.googleapis.com/kl-website-432404.appspot.com/assets//testi2_86324e7877/testi2_86324e7877.png", // Replace with actual image URL
    text: "Working with Incglobal is smooth and productive. They did really well with our last two projects, which is why we are giving them our next project too.",
    author: "Casadel Builders",
  },
];

const TestLog = () => {
  return (
    <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <div className="testimonial-logo">
            <img src={testimonial.logo} alt={`${testimonial.author} Logo`} />
          </div>
          <p className="testimonial-text">{testimonial.text}</p>
          <p className="testimonial-author">{testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};

export default TestLog;
