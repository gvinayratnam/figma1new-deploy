import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './Home Components/Hero'
import Services from './Home Components/Services'
import NavBar from './NavBar'
import Development from './Home Components/Development'
import Theabout from './Theabout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      {/* <Theabout/> */}
      <BrowserRouter>
        <NavBar/> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Theabout/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
