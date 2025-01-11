import React, { useContext } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import {UserContext} from './context/userContext'


function App() {

  return (
    <div>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="captain/signup" element={<CaptainSignup />} />
        <Route path="captain/login" element={<CaptainLogin />} />
      </Routes>

    </div>
  )
}

export default App
