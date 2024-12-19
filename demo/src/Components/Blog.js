import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Blogs.css";

const Blog = () => {
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
      description:
        "The cloud revolution has reshaped how bus data storage to  AWS, Azure, and Google Cloud, let us guide you to the perfect cloud services for your business.",
      buttonText: "Read more",
      image:
        "https://storage.googleapis.com/kl-website-432404.appspot.com/assets//KL_NOV_24_P7wide_3692deea1a/KL_NOV_24_P7wide_3692deea1a.png", // Replace with your image URL
    },
    {
      title: "Finding the Best eCommerce Platform",
      description:
      "In the rapidly evolving world of ecommerce, choosing the best eCommerce platform can make or break your online business. WooCommerce, Magento, and ",
      buttonText: "Read more",
      image:
        "https://storage.googleapis.com/kl-website-432404.appspot.com/assets//KL_NOV_24_P3_Blog_Size_46a0c94e68/KL_NOV_24_P3_Blog_Size_46a0c94e68.png", // Replace with your image URL
    },
    {
      title: "Which CMS Suits Me Better? ",
      description:
      "In the rapidly evolving world of ecommerce, choosing the best eCommerce platform can make or break your online business. WooCommerce, Magento, and ",
      buttonText: "Read more",
      image:
        "https://storage.googleapis.com/kl-website-432404.appspot.com/assets//KL_OCT_24_B1_Blog_Size_1_1_df43631a3c/KL_OCT_24_B1_Blog_Size_1_1_df43631a3c.png", // Replace with your image URL
    },
  ];

  return (
    <div className="carousel-container">
      <h1>Blogs</h1>
      <div >
        <Slider {...settings}>
          {blogs.map((blog, index) => (
        <div className="hi">
                <div className="card" key={index} >
              <img src={blog.image} alt={blog.title} className="card-image" />
              <div className="card-content">
                <h2 className="titles">{blog.title}</h2>
                <p className="despcription">{blog.description}</p>
                <button className="Btns">{blog.buttonText}</button>
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

export default Blog;
