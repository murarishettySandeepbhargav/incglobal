import React from 'react'
import Team from "../Images/Team.jpg"
import "./About.css"
import OurProcess from './OurProcess'
import Glance from './Glance'
import AssurancesDelivered from './AssurancesDelivered '
import StatsCard from './StartsCard'
import LeaderShip from './LeaderShip'
import OurCustomers from './OurCustomers'
// import Pointer from "../Components/Pointer"
const About = () => {
  return (
    <div  style={{backgroundColor:"white",color:"black"}}>
      <div>
        <img  src={Team} alt='' className='Team'></img>
      </div>
      {/* <Pointer></Pointer> */}
      <OurProcess></OurProcess>
       <Glance></Glance>
      <StatsCard></StatsCard> 
     <AssurancesDelivered></AssurancesDelivered> 
       <LeaderShip></LeaderShip>
      <OurCustomers></OurCustomers> 
    </div>
  )
}

export default About