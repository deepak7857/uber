import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import UberLogo from "../assets/Uber_logo.png";
import tempMap from "../assets/temp_map.jpg";
import "remixicon/fonts/remixicon.css";
import LocationSearchpanel from "../Components/LocationSearchpanel";

import VehiclePanel from "../Components/VehiclePanel";
import ConformRide from "../Components/ConformRide"

function UserHome() {
  const [pickup, setpickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelOpenRef=useRef(null);
  const ConformRidePanelRef=useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [ConformRidePanel,setConformRidePanel]=useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );
  useGSAP(function(){
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelOpenRef.current,{
        transform:'translateY(0)'
   })
    }
    else{
      gsap.to(vehiclePanelOpenRef.current,{
        transform:'translateY(100%)'
   })
    }
     
  },[vehiclePanelOpen])


  useGSAP(function(){
    if(ConformRidePanel){
      gsap.to(ConformRidePanelRef.current,{
        transform:'translateY(0)'
   })
    }
    else{
      gsap.to(ConformRidePanelRef.current,{
        transform:'translateY(100%)'
   })
    }
     
  },[ConformRidePanel])

  return (
    <div
    className="h-screen relative overflow-hidden">
      <img className="w-16 absolute left-5 top-5" src={UberLogo} alt="logo" />
      <div  
      className="h-screen w-screen">
        {/* image for temporary use  */}
        <img className="h-full w-full object-cover" src={tempMap} alt="map" />
      </div>
      <div className=" flex flex-col justify-end   h-screen absolute top-0 w-full ">
        <div className="bg-white p-6 h[30%] relative ">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 right-6 top-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>

          <h4 className="font-semibold text-2xl">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] bg-black left-10 rounded-full"></div>
            <input
              value={pickup}
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={() => {
                setpickup(e.target.value);
              }}
              className="p-5 bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5 "
              type="text"
              placeholder="Add a pickup location"
            />
            <input
              value={destination}
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={() => {
                setDestination(e.target.value);
              }}
              className="p-5 bg-[#eee] px-12 py-2 text-lg mt-3 rounded-lg w-full  "
              type="text"
              placeholder="Ente your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0  ">
          <LocationSearchpanel
          
          setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>
      <div ref={vehiclePanelOpenRef} className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 w-full  ">
        <VehiclePanel setConformRidePanel={setConformRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} />
      </div>
      <div ref={ConformRidePanelRef} className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 w-full  ">
        <ConformRide />
      </div>
    </div>
  );
}

export default UserHome;
