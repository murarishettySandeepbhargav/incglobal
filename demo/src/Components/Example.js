import React, { useEffect, useRef } from "react";
import "./Transform.css"; // Custom styles for the component

const Transform = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let isDown = false;
    let startY;
    let scrollTop;

    const onMouseDown = (e) => {
      isDown = true;
      container.classList.add("active");
      startY = e.pageY - container.offsetTop;
      scrollTop = container.scrollTop;
    };

    const onMouseLeave = () => {
      isDown = false;
      container.classList.remove("active");
    };

    const onMouseUp = () => {
      isDown = false;
      container.classList.remove("active");
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const y = e.pageY - container.offsetTop;
      const walk = (y - startY) * 2; // Scroll-fast multiplier
      container.scrollTop = scrollTop - walk;
    };

    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="vertical-carousel">
      <div className="digital-card-container">
        <div className="content">
          <h1>
            Digital <span className="dot">.</span>
          </h1>
          <p>
            Transform your business with our innovative digital solutions. From
            digital transformation and application modernization to DevOps and
            Cybersecurity, we empower your enterprise to thrive in the digital
            age.
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
            Ai <span className="dot">.</span>
          </h1>
          <p>
            Leverage the power of AI to drive growth and efficiency. Our GenAI,
            machine learning, and data analytics solutions provide actionable
            insights and automate processes, helping you stay ahead in a
            competitive landscape.
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
            Cx <span className="dot">.</span>
          </h1>
          <p>
            Enhance your customer experience with our comprehensive CX services.
            Our expertise in SEO, social media marketing, content marketing, and
            2D/3D animation ensures your brand stands out and engages
            effectively with your audience.
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
  );
};

export default Transform;
.vertical-carousel {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 100vh;
    cursor: grab;
    scroll-behavior: smooth;
  }
  
  .vertical-carousel.active {
    cursor: grabbing;
  }
  
  .digital-card-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f4f4f4;
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    width: 80%;
    transition: transform 0.2s ease-in-out;
  }
  
  .digital-card-container:hover {
    transform: scale(1.03);
  }
  
  .content {
    flex: 1;
    margin-right: 20px;
  }
  
  .video-container {
    flex: 1;
  }
  
  .video {
    width: 100%;
    border-radius: 8px;
  }
  
  .read-more-btn {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .read-more-btn:hover {
    background-color: #0056b3;
  }
  
  .dot {
    color: red;
  }
  