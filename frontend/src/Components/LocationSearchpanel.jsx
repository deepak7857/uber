import React from 'react'

const LocationSearchpanel = (props) => {
         

     const location=["24/5, Niyals Sevices Raj Enclave GMS Road Dehradun Uttarakhnad",
      "24/5, Niyals Sevices Raj Enclave GMS Road Dehradun Uttarakhnad",
      "22/5, Niyals Sevices Raj Enclave GMS Road Dehradun Uttarakhnad",
      "21/5, Niyals Sevices Raj Enclave GMS Road Dehradun Uttarakhnad",
      "20/5, Niyals Sevices Raj Enclave GMS Road Dehradun Uttarakhnad",
      "19/5, Niyals Sevices Raj Enclave GMS Road Dehradun Uttarakhnad",
      "18/5, Niyals Sevices Raj Enclave GMS Road Dehradun Uttarakhnad"
     ]

  return (
    <div>
     {/* this is just a sample data */}
     {
      location.map(function(location,index){
       return  <div onClick={()=>{
        props.setVehiclePanelOpen(true)
        props.setPanelOpen(false)

       }} key={index} className='flex gap-2 my-4 items-center ml-3 justify-start active:border-2 active:border-black  '>
        <h2 className='bg-[#eee] h-8 flex items-center w-8 justify-center rounded-full'><i className="ri-map-pin-line"></i> </h2>
        <h4 className='font-medium'> {location}</h4>
       </div>
      })
    }
    </div>
  )
}

export default LocationSearchpanel
