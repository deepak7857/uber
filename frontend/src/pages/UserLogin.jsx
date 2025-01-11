import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function UserLogin() {
  const [email,setEmail]=useState('');
  const [Password,setPassword]=useState('');
  const [userdata,setUserdata]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    const userdata={
      email:email,
      password:Password
    }
    
    setPassword('');
    setEmail('');

    
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-20 mb-5' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
      <form onSubmit={(e)=>{
        
        handleSubmit(e);
      }}>
      <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='Email-id'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            required
           value={Password}
           onChange={(e)=>setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="pasword"
            placeholder='Password'
          />
         <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-full px-4 py-2  w-full text-lg placeholder:text-base'
          >Login</button>
      </form>
      <p className='text-center'>New here? <Link to='/user/signup' className='text-blue-600'>Create new Account</Link></p>
     
      </div>
      <div>
        <Link
          to='/captain/login'
          className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-full px-4 py-2  text-lg placeholder:text-base'
        >Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
