import React from "react";
import { Route, Routes } from 'react-router-dom'
import Logo from './components/Logo'
import UserInfo from './components/UserInfo'
import Users from './components/Users'


function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container text-gray-200 py-3">
        <Logo />
        <Routes>
          <Route  path="/" element={<Users />}></Route>
          <Route></Route>
        </Routes>
        
      </div>
    </div>
  )
}

export default App
