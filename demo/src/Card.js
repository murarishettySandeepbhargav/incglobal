import React from 'react';
import Slider from 'react-slick';
import './LogoSlider.css'; // Import the CSS file for styling logos

const LogoSlider = () => {
  const logos = [
    '/path/to/logo1.png', // Add your logo images here
    '/path/to/logo2.png',
    '/path/to/logo3.png',
    '/path/to/logo4.png',
    '/path/to/logo5.png',
  ];

  const settings = {
    infinite: true,       // Infinite looping
    speed: 500,           // Transition speed
    slidesToShow: 5,      // Number of logos visible at a time
    slidesToScroll: 1,    // Number of logos to scroll at a time
    responsive: [
      {
        breakpoint: 1024,  // For screens larger than 1024px
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,   // For screens larger than 768px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,   // For screens larger than 480px
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="logo-slider">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <img src={logo} alt={`Logo ${index}`} className="logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
