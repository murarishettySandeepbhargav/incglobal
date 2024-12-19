import React from "react";
import CountUp from "react-countup";
import "./StartsCard.css";

const StatsCard = () => {
  const statsData = [
    { value: 50, label: "EMPLOYEES", suffix: "+" },
    { value: 2000, label: "WORKING HOURS", suffix: "K+" },
    { value: 5, label: "INDUSTRIES", suffix: "+" },
    { value: 50, label: "PROJECTS", suffix: "+" },
  ];

  return (
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <div className="stats-card" key={index}>
          <h2>
            <CountUp 
              start={20} 
              end={stat.value} 
              duration={25} 
              separator="," 
            />
            {stat.suffix}
          </h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
