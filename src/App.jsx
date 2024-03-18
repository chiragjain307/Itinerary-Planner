import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Header/Navbar'
import Footer from './Components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      
      <main>
        <Outlet />
      </main>
      
      <Footer />
    </>
  )
}

export default App
