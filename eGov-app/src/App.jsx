import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Topbar from './Components/Topbar'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Products from './Components/ProductsSection'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar/>
      <Navbar/>
      <HeroSection/>
      <Products/>
      <Footer/>
    </>
  )
}

export default App
