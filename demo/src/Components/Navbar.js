import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Logo from "../Images/IncLogo.png";
import Incmain from "../Images/IncMain.jpg"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Incmain} className="inclogo" alt="Inc Global Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Inc Global
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <Link to="/" className="Link">
                  <li className="nav-item">
                    <a className="Tags" aria-current="page">
                      Home
                    </a>
                  </li>
                </Link>
                <Link to="/About" className="Link">
                  <li className="nav-item">
                    <a className="Tags">About</a>
                  </li>
                </Link>
                <Link to="/Services" className="Link">
                  <li className="nav-item">
                    <a className="Tags">Services</a>
                  </li>
                </Link>
                <Link to="/careers" className="Link">
                  <li className="nav-item">
                    <a className="Tags">Careers</a>
                  </li>
                </Link>
                <Link to="/Gallery" className="Link">
                  <li className="nav-item">
                    <a className="Tags">Gallery</a>
                  </li>
                </Link>
                <Link to="/insights" className="Link">
                  <li className="nav-item">
                    <a className="Tags">Insights</a>
                  </li>
                </Link>
                <Link to="/Connects" className="Link">
                  <li className="nav-item">
                    <a className="Tags">Connects</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
