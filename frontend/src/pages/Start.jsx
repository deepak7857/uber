import React from 'react'
import { Link } from 'react-router-dom'
import UberLogo from '../assets/Uber_logo.png';
import HomeB from '../assets/Home_page.avif';
function Start() {
  return (
    <div>
      <div className=' bg-cover bg-center h-screen pt-8 flex justify-between flex-col w-full ' style={{ backgroundImage: `url(${HomeB})` }} >
        <img className="w-16 ml-8" src={UberLogo}alt="logo"/>
      <div className='bg-white pb-8 py-4 px-4'>

      <h2 className='text-[30px] font-semibold'>Get Start With Uber</h2>
      <Link to="/user/login"className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
      </div>
      </div>
    </div>
  )
}

export default Start
