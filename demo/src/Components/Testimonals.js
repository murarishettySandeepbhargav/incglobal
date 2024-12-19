import React from "react";
import "./Testimonals.css";
import TestLog from "./TestLog";
import Team from "../Images/Team.jpg"
const Testimonals = () => {
  return (
    <div>
      <div className="Testimonals">
      <div>
        <h1 className="Test1">Testimonals</h1>
        <p className="Test2">
          Discover how Incglobal has helped others achieve their goals. See
          real stories about how Konceptslab overcame challenges
        </p>
      </div>
      <TestLog></TestLog>
  
      </div>
      <div>
        <img src={Team} alt="" className="Teamimg"></img>
      </div>
    </div>
  );
};

export default Testimonals;
