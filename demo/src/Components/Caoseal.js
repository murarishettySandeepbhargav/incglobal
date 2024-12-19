import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Caroseal.css'; // Include your custom styles if neede
import Inc1 from "../Images/Incglobal1.jpg"
import Inc2 from "../Images/Incglobal2.jpg"
import Inc3 from "../Images/IncGlobal3.jpg"

const Caoseal = () => {
  return (
    <Swiper
      modules={[Navigation, Mousewheel]}
      loop={true}
      mousewheel={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      breakpoints={{
        640: {
          direction: 'vertical',
          loop: false,
        },
      }}
      className="swiper-container"
    >
      <SwiperSlide>
        <img
          src={Inc1}
          alt="Slide 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
         src={Inc2}
          alt="Slide 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
         src={Inc3}
          alt="Slide 3"
        />
      </SwiperSlide>
    
      {/* Navigation buttons */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
  );
};

export default Caoseal;
