import React from "react";
import Joinus from "./Joinus";
import Apply from "./Apply";
import "./Careers.css";

const Careers = () => {
  return (
    <div>
      <video autoPlay loop muted className="careersvideo">
        <source src="https://www.konceptslab.com/videos/career.webm"></source>
      </video>
      <div className="Joindiv">
        <Joinus></Joinus>
        <Apply></Apply>
      </div>
    </div>
  );
};

export default Careers;
