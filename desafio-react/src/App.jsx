import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black h-screen'>
      <h1 className='text-3xl text-indigo-500'>Hello World</h1>

    </div>
    
  )
}

export default App
