import React from 'react'
import image from '../assets/images/hero.png'
import { RiCopyrightLine } from 'react-icons/ri'

const Hero = () => {
    return (
        <div className="container-p pt-15 bg-center" style={{ backgroundImage: `url(${image})` }}>
            <div className='text-white flex flex-col  lg:gap-35 md:gap-25 gap-10 lg:py-20 md:py-15 py-10'>
                <div className='flex sm:justify-between justify-evenly'>
                    <div className=' '>
                        <ul className='text-[11px]'>
                            <li>WEB-DESIGNER</li>
                            <li>Social Media</li>
                            <li>TREND ANALYST</li>
                        </ul>
                    </div>
                    <div className='flex sm:w-1/3 sm:flex-row flex-col  justify-between items-center text-[11px]!'>
                        <div className='flex gap-2  items-center '>
                            <div className='h-2 w-2 bg-[#07C42C] shadow-[0px_0px_3px_2px_#07C42C]  rounded-full'></div>
                            <p >AVAILABLE FOR WORK</p>
                        </div>
                        <div className='flex items-center'>
                            <RiCopyrightLine /><span>2025</span>
                        </div>
                    </div>
                </div>

                <div className='flex md:justify-between justify-center items-center md:flex-row flex-col gap-5'>
                    <div className=' flex items-baseline gap-1 '>
                        <span className='md:text-8xl sm:text-7xl text-5xl font-semibold leading-none'>KBK </span>
                        <div className='relative'>
                            <span className=' sm:text-3xl sm:border-none border-b-3 border-[#00C950] text-lg font-semibold leading-none'>Businesssolutions</span>
                            <div className='sm:w-[80px] sm:h-[8px] sm:block hidden bg-[#00C950] absolute sm:-right-[4%] '></div>
                        </div>
                    </div>

                    <div className=' md:w-1/3 flex flex-col md:items-start items-center gap-5 sm:justify-between   '>
                        <p className='sm:text-sm md:w-full w-3/4 md:text-left text-center  font-medium text-xs'>I craft bold brands and modern websites with purpose.
                            Each detail balances design and usability for impact. My
                            work adapts as your vision grows.
                        </p>
                        <button className='border px-3 py-1 rounded-lg mb-2 cursor-pointer text-sm sm:m-0 m-auto'>START A PROJECT</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
