import { useState } from 'react'
import './App.css'
import Logo from './components/Logo'
import Users from './components/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-black">
      <div className="container text-gray-200 py-3">
      <Logo />
      <Users />

      </div>
     
    </div>
  )
}

export default App
