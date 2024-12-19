import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ClientStories.css";

const ClientStories = () => {
  const settings = {
    dots: false, // Hides dots if not needed
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const blogs = [
    {
      title: "Confused by Cloud Choices?",

      buttonText: "Read story",
      image:"https://storage.googleapis.com/kl-website-432404.appspot.com/assets//the_despatch_rider_thumbnail_7be6f87a43/the_despatch_rider_thumbnail_7be6f87a43.jpg", // Replace with your image URL
    },
    {
      title: "Finding the Best eCommerce Platform",

      buttonText: "Read story",
      image:
        "https://storage.googleapis.com/kl-website-432404.appspot.com/assets//casadel_thumbnaill_c951ceb82e/casadel_thumbnaill_c951ceb82e.jpg", // Replace with your image URL
    },
    {
      title: "Which CMS Suits Me Better? Strapi or WordPress?",

      buttonText: "Read Story",
      image:
        "https://storage.googleapis.com/kl-website-432404.appspot.com/assets//gem_plast_thumbnail_fe27850e35/gem_plast_thumbnail_fe27850e35.jpg", // Replace with your image URL
    },
  ];

  return (
    <div className="carousel-container1">
      <h1>ClientStories</h1>
      <div>
        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <div className="hi1">
              <div className="card1" key={index}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="card-image1"
                />
                <div className="card-content1">
                  <h2 style={{ fontSize: "20px" }}>{blog.title}</h2>
                  <p style={{ fontSize: "16px" }}>{blog.description}</p>
                  <button className="Btns1">{blog.buttonText}</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#000",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#000",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

export default ClientStories;
