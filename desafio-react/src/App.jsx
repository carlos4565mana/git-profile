import { useState } from 'react'
import Logo from './components/Logo'
import UserInfo from './components/UserInfo'
import Users from './components/Users'


function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container text-gray-200 py-3">
        <Logo />
        <UserInfo />
      </div>
    </div>
  )
}

export default App
