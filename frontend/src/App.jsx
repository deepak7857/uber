import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'


function App() {
  return (
    <div>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="captain/signup" element={<CaptainLogin />} />
        <Route path="captain/login" element={<CaptainSignup />} />
      </Routes>

    </div>
  )
}

export default App
