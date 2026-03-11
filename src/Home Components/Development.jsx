import React, { useEffect, useState } from 'react'
import ash from '../assets/images/ash.png'
import mbl from '../assets/images/Image.png'
import digi3 from '../assets/images/digi3.jpg'
import ms from '../assets/images/ms.jpg'

import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
const Development = () => {
    let [bgimage,setbgImage] =useState(0)
    let bg = [mbl,digi3,ms]
    useEffect(()=>{
        if (bgimage>bg.length-1) {
            setbgImage(0)
        }
        if(bgimage<0){
            setbgImage(bg.length-1)
        }
    },[bgimage])
    let next =()=>{
        setbgImage(bgimage+1)
    }
    let prev =()=>{
        setbgImage(bgimage-1)
    }
    console.log(bgimage)
  return (
    <div className='container-p w-full h-auto bg-black bg-contain  w-full bg-center relative text-white'>
      <div className=' h-full w-full  relative z-10 flex flex-col md:gap-100 sm:gap-60 gap-10 sm:justify-between justify-start md:items-start  items-center py-10  px-2'>
        <div className=''>
            <p  className='text-xs text-[#FFFFFFA3] md:mb-10 md:p-1'>SELECTED WORKS</p>
            <p onClick={()=>setbgImage(1)} className={` sm:text-4xl text-2xl cursor-pointer font-[600] tracking-wider ${bgimage===1?'text-white':'text-[#FFFFFF52]/70'} `}>Digital Marketing</p>
            <p onClick={()=>setbgImage(0)} className={`sm:text-5xl text-3xl cursor-pointer font-[600] ${bgimage===0?'text-white':'text-[#FFFFFF52]/70'} md:my-3`}>Development</p>
            <p onClick={()=>setbgImage(2)} className={` sm:text-4xl text-2xl cursor-pointer font-[600] tracking-wider ${bgimage===2?'text-white':'text-[#FFFFFF52]/70'}`}>Media Service</p>
        </div>

        <div className='flex w-full md:flex-row flex-col justify-between  md:items-strat'>
            <div className='md:w-2/5 flex  flex-wrap md:justify-start gap-1 justify-center'>
                <button className='rounded-3xl border md:px-6 px-3 cursor-pointer md:text-sm text-xs md:py-2 py-1'>WEBSITE DESIGN</button>
                <button className='rounded-3xl border md:px-6 px-3 cursor-pointer md:text-sm text-xs md:py-2 py-1'>BRANDING</button>
                <button className='rounded-3xl border md:px-6 px-3 cursor-pointer md:text-sm text-xs md:py-2 py-1'>VISUAL IDENTITY</button>
            </div>
            <div className='flex gap-20 md:w-2/5 text-xs sm:justify-center justify-evenly p-2'>
                <div>
                    <div onClick={prev} className='flex gap-2 cursor-pointer items-center'>
                        <GoArrowLeft className='' /> <span>PREV</span>
                    </div>
                </div>
                <div>
                    <div onClick={next} className='flex gap-2 cursor-pointer items-center'>
                         <span>NEXT</span><GoArrowRight className='' />
                    </div>
                </div>
            </div>
            <div className='md:w-2/5 text-center'>
                <h1 className='md:text-7xl text-2xl font-medium'>20<span className='text-[#00C950]'>26</span></h1>
            </div>
        </div>
      </div>
      <div className='absolute sm:w-auto w-2/3 h-full  bottom-[0%] right-[5%]'><img  className=' w-full h-full' src={bg[bgimage]} alt="" /></div>
      <div  className='absolute bottom-[0%] left-0 w-full'><img className='w-full' src={ash} alt="" /></div>
    </div>
  )
}

export default Development
