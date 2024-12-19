import React from "react";
import "./Trending.css"
import Blog from "./Blog";
const Trending = () => {
  return (
    <div>
      <div className="Trending">
        <h1 className="Trend">Trending Now</h1>
        <p className="Trend1">
          Welcome to our blog! Here, we explore the latest trends and
          innovations in technology, offering expert insights and practical
          tips.
        </p>
      </div>
      <Blog></Blog>
    </div>
  );
};

export default Trending;
