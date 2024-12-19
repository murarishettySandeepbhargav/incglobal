import React from 'react'
import "./Services.css"
import Digital from "../Components/Digital"
import Accordation from './Accordation'
import Ai from "../Components/Ai"
import GenAi from './GenAi'
const Services = () => {
  return (
    <div>
        <div  className="Servicesmain">
            <Digital></Digital>
            <Accordation></Accordation>
        </div>
        <div className='Servicesmain' >
            <Ai></Ai>
            <GenAi></GenAi>
        </div>
    </div>
  )
}

export default Services