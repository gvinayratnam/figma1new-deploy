import React, { useState, useEffect } from 'react'
import { FaBars } from "react-icons/fa"
import { RxCross1 } from "react-icons/rx"
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    const [bar, setBar] = useState(false)

    useEffect(() => {
        document.body.style.overflow = bar ? "hidden" : "auto"
    }, [bar])

    return (
        <>
           
            <div className='w-screen sm:block hidden h-auto container-p bg-linear-to-r from-[#242424]/90 to-[#111111]/90 fixed z-22'>
                <div className='flex sm:justify-center justify-between sm:gap-10 sm:text-base text-xs sm:p-4 py-4 text-white'>
                    <div className='cursor-pointer'><NavLink to={'/'}>Home</NavLink></div>
                    <div className='cursor-pointer'><NavLink to={'/about'}>About</NavLink></div>
                    <div className='cursor-pointer'><span>Services</span></div>
                    <div className='cursor-pointer'><span>Portfolio</span></div>
                    <div className='cursor-pointer'><span>Contact</span></div>
                </div>
            </div>

            
            <div className='sm:hidden block text-white'>

                <div className='text-3xl p-2 bg-linear-to-r from-[#242424]/90 to-[#111111]/90 relative'>
                    <span onClick={() => setBar(!bar)}>
                        <FaBars />
                    </span>
                </div>

                <div className={`flex w-full transform transition-transform duration-100 ease-in-out ${bar ? "translate-x-0" : "-translate-x-full"} absolute z-11 top-0`}>

                    <div className='w-[70%] h-screen bg-linear-to-r from-[#242424] to-[#111111] px-2 flex flex-col gap-5'>

                        <div className='flex justify-between items-center text-3xl'>
                            <span>MENU</span>
                            <span onClick={() => setBar(!bar)}>
                                <RxCross1 />
                            </span>
                        </div>

                        <div className='text-xl font-thin flex flex-col gap-2'>
                            <div><span>Home</span></div>
                            <div><span>About</span></div>
                            <div><span>Services</span></div>
                            <div><span>Portfolio</span></div>
                            <div><span>Contact</span></div>
                        </div>

                    </div>

                    <div onClick={() => setBar(!bar)} className='w-[30%] h-screen'></div>

                </div>
            </div>
        </>
    )
}

export default NavBar