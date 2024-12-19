import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Left Section */}
        <div style={{ maxWidth: "40%" }}>
          <h3 style={{ color: "#0056b3" }}>INC Global</h3>
          <p style={{ color: "#333", lineHeight: "1.6" }}>
            At INC Global, we are committed to pioneering innovations that
            enable intelligent computing across all domains, empowering the
            world to address its most pressing challenges. Our cutting-edge AI,
            high-performance, energy-efficient computing, and unparalleled
            connectivity provide reliable solutions that drive transformation
            across key industries. At INC Global, we are dedicated to advancing
            human progress.
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/path-to-instagram-icon.png"
                alt="Instagram"
                style={{ width: "24px" }}
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/path-to-facebook-icon.png"
                alt="Facebook"
                style={{ width: "24px" }}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/path-to-linkedin-icon.png"
                alt="LinkedIn"
                style={{ width: "24px" }}
              />
            </a>
          </div>
          <p style={{ marginTop: "10px" }}>
            <a
              href="mailto:info@incglobal.pro"
              style={{ color: "#333", textDecoration: "none" }}
            >
              ✉ Email: info@incglobal.pro
            </a>
            <br />
            <a
              href="tel:+916363617779"
              style={{ color: "#333", textDecoration: "none" }}
            >
              📞 Phone: +91 6363617779
            </a>
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h4 style={{ color: "#333" }}>Quick Links</h4>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a href="/" style={{ color: "#0056b3", textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li>
              <a
                href="About"
                style={{ color: "#0056b3", textDecoration: "none" }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="Services"
                style={{ color: "#0056b3", textDecoration: "none" }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="careers"
                style={{ color: "#0056b3", textDecoration: "none" }}
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="Connects"
                style={{ color: "#0056b3", textDecoration: "none" }}
              >
                Connects
              </a>
            </li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div>
          <h4 style={{ color: "#333" }}>Email Subscriptions</h4>
          <p style={{ color: "#888" }}>
            Get the latest INC Global and industry information delivered to your
            inbox.
          </p>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#0056b3",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
