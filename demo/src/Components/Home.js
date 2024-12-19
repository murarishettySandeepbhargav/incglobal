import React from "react";
//
import Carousel from "./Caoseal";
import Movement from "./Movement";
import OurMission from "../OurMission";
import PartnerCarousel from "./PartnerCaroseal";
import WhyShould from "./WhyShould";
import Trending from "./Trending";
import Testimonals from "./Testimonals";
import OurCustomers from "./OurCustomers";
import Welcome from "./Welcome";
// import Pointer from "../Components/Pointer"
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div style={{ backgroundColor: "white", color: "black" }}>
        {/* <Pointer></Pointer> */}
        <Carousel></Carousel>
        <Welcome></Welcome>
        <OurMission></OurMission>
        <Movement></Movement>

        <PartnerCarousel></PartnerCarousel>
        <WhyShould></WhyShould>
        <Trending></Trending>
        <Testimonals></Testimonals>
        <OurCustomers></OurCustomers>
      </div>
    </div>
  );
};

export default Home;
