import React from 'react'
import carlogo from "../assets/uber_car_logo.png";

const ConformRide = (props) => {
  return (
    <div>
      <h5 onClick={()=>{
          props.setVehiclePanelOpen(false)
         }}
        className="p-1 text-center top-0 absolute w-full "><i className="p-10 text-3xl ri-arrow-down-wide-line"></i></h5>
       <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
        <div className='flex justify-between  flex-col items-center'>
        <img className="h-10" src={carlogo} alt="car_logo" />
        <div className='w-full '>
          
        </div>
          <button className='w-full'>Confirm</button>
        </div>
        
    </div>
  )
}

export default ConformRide
