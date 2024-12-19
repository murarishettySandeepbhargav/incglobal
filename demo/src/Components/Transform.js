import React from "react";

import "./Transform.css";

const Transform = () => {
  return (
    <div>
      <div className="vertical-carousel">
        <div className="digital-card-container">
          <div className="content">
            <h1>
              Digital <span className="dot">.</span>
            </h1>
            <p>
              Transform your business with our innovative digital solutions.
              From digital transformation and application modernization to
              DevOps and Cybersecurity, we empower your enterprise to thrive in
              the digital age.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
          <div className="video-container">
            <video
              autoPlay
              loop
              muted
              className="video"
              src="https://storage.googleapis.com/kl-website-432404.appspot.com/assets//Robo_Animation_Digital_7b3a217489/Robo_Animation_Digital_7b3a217489.webm"
            />
          </div>
        </div>

        <div className="digital-card-container">
          <div className="content">
            <h1>
              AI <span className="dot">.</span>
            </h1>
            <p>
              Leverage the power of AI to drive growth and efficiency. Our
              GenAI, machine learning, and data analytics solutions provide
              actionable insights and automate processes, helping you stay ahead
              in a competitive landscape.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
          <div className="video-container">
            <video
              autoPlay
              loop
              muted
              className="video"
              src="https://storage.googleapis.com/kl-website-432404.appspot.com/assets//Robo_Animation_AI_0cf5986577/Robo_Animation_AI_0cf5986577.webm"
            />
          </div>
        </div>

        <div className="digital-card-container">
          <div className="content">
            <h1>
              CX <span className="dot">.</span>
            </h1>
            <p>
              Enhance your customer experience with our comprehensive CX
              services. Our expertise in SEO, social media marketing, content
              marketing, and 2D/3D animation ensures your brand stands out and
              engages effectively with your audience.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
          <div className="video-container">
            <video
              autoPlay
              loop
              muted
              className="video"
              src="https://storage.googleapis.com/kl-website-432404.appspot.com/assets//Robo_Animation_CX_c843b797a1/Robo_Animation_CX_c843b797a1.webm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transform;
