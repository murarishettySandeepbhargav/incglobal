import React from "react";
import "../src/Components/OurMission.css";

const OurMission = () => {
  return (
    <div className="MainCard">
      <div className="mission-card">
        <h1>Our Mission</h1>
        <p>
          Our mission is to simplify digital operations by providing integrated
          IT and media services under one roof, driven by global talent and a
          commitment to delivering transformative results for our clients.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div>
        <video autoPlay loop muted className="video">
          <source src="https://storage.googleapis.com/kl-website-432404.appspot.com/assets//KL_Web_Video_V2_w7dz6j_3ff22704e4/KL_Web_Video_V2_w7dz6j_3ff22704e4.mp4"></source>
        </video>
      </div>
    </div>
  );
};

export default OurMission;
