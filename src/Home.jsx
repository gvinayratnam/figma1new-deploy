import React, { useRef } from 'react'
import NavBar from './NavBar'
import Hero from './Home Components/Hero'
import Development from './Home Components/Development'
import Services from './Home Components/Services'
import Process from './Home Components/Process'
import Iso from "./Home Components/Iso";
import Techstack from './Home Components/Techstack'
import Info from './Home Components/Info'
import About from './Home Components/About'
import Services2 from './Home Components/Services2'


const Home = () => {
  let heroRef = useRef(null)
  let aboutRef = useRef(null)
  let servicesRef = useRef(null)
  let portfolioRef = useRef(null)
  let contactRef = useRef(null)


  return (
   <>
   {/* <NavBar 
    heroRef={heroRef} 
    aboutRef={aboutRef} 
    servicesRef={servicesRef} 
    portfolioRef={portfolioRef} 
    contactRef={contactRef}/>

   <div ref={heroRef}>
    <Hero />
   </div>

   <Development/>
    <div ref={servicesRef}>
         <Services/>
    </div>
   <Process/>

    <div ref={aboutRef}>
         <Iso/>
    </div>

   <Techstack/>
    <div ref={portfolioRef}>
       <Info/>
    </div>
   <div ref={contactRef}>
    <About/>
   </div> */}

   <div>
      <Hero/>
     <Development/>
     <Process/> 
     {/* <Services/> */}
     <Services2/>
     <Iso/>
     <Info/>
     <About/> 
   </div>
   </>
  )
}

export default Home
