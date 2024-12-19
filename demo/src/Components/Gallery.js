import React from "react";
import "./Gallery.css"
const Gallery = () => {
  return (
    <div>
      <video autoPlay className="GalleryVideo">
        <source src="https://www.konceptslab.com/videos/career.webm"></source>
      </video>
    </div>
  );
};

export default Gallery;
