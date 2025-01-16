import React,{useContext , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const CaptainProtectWrapper = ({ children }) => {

  const token=localStorage.getItem('token');
  const navigate =useNavigate()
  useEffect(() => {
    if(!token){
      navigate('/captain/login')
    }
    axios.get(`${import.meta.env.VITE_API_URL}/captain/profile`, {
      headers: {
          Authorization: `Bearer ${token}`
      }
  }).then(response => {
      if (response.status === 200) {
          setCaptain(response.data.captain)
          setIsLoading(false)
      }
  })
      .catch(err => {

          localStorage.removeItem('token')
          navigate('/captain/login')
      })

  }),[token,navigate]


  return (
   <>
   {children}
   </>
  )
}

export default CaptainProtectWrapper
