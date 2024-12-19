import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Careers from "./Components/Careers";
import Gallery from "./Components/Gallery";
import Insights from "./Components/Insights";
import Connects from "./Components/Connects";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Preloader from "./Components/Preloader"; // Import the Preloader component
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true); // Preloader state

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" exact Component={Home}></Route>
              <Route path="/About" exact Component={About}></Route>
              <Route path="/Services" exact Component={Services}></Route>
              <Route path="/Careers" exact Component={Careers}></Route>
              <Route path="/Gallery" exact Component={Gallery}></Route>
              <Route path="/Insights" exact Component={Insights}></Route>
              <Route path="/Connects" exact Component={Connects}></Route>
            </Routes>
          </BrowserRouter>
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
};

export default App;
