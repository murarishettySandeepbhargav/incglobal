import React from "react";
// 
import Carousel from "./Caoseal";
import Movement from "./Movement"
import OurMission from "../OurMission";
import PartnerCarousel from "./PartnerCaroseal";
import WhyShould from "./WhyShould";
import Trending from "./Trending";
import Testimonals from "./Testimonals";
import OurCustomers from "./OurCustomers";
// import Pointer from "../Components/Pointer"
import "./Home.css"
const Home = () => {
  return (
    <div>
     <div style={{backgroundColor:"black",color:"white"}}>
     <Pointer></Pointer>
      <Carousel></Carousel>
      {/* <Movement></Movement> */}
      {/* <OurMission></OurMission> */}
     {/* <PartnerCarousel></PartnerCarousel> */}
      {/* <WhyShould></WhyShould>
     <Trending></Trending>
     <Testimonals></Testimonals>
     <OurCustomers></OurCustomers>  */}
     </div>
    </div>
  );
};

export default Home;
