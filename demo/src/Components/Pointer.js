import React, { useEffect, useState } from "react";
import "./Pointer.css"; // Create a CSS file for styling the pointer

const PointerTracker = () => {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ left: e.pageX, top: e.pageY });
    };

    // Add mousemove event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="pointer" style={{ left: position.left, top: position.top }}></div>;
};

export default PointerTracker;
