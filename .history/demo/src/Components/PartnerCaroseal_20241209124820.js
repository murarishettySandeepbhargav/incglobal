// PartnerCarousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "./PartnerCarousel.css"; // Custom styles

const PartnerCarousel = () => {
  // Settings for the React Slick slider
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Logos array
  const logos = [
    "https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg",
    "https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg",
    "https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg",
    "https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg",
    "https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg",
    "https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg",
    "https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg",
  ];

  return (
 <div className="Partner">
     <div className="partner-carousel-container">
      <h2 className="Our">Our Partners</h2>
      <Slider {...settings} className="partner-slider">
        {logos.map((logo, index) => (
          <div key={index} className="slide">
            <img src={logo} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
 </div>
  );
};

export default PartnerCarousel;
