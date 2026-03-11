import React from 'react'
import isobg from '../assets/images/isobg.png'
import wheel from '../assets/imagesabout/__before.png'
import tweet from '../assets/imagesabout/span.each-object (1).png'
import rocket from '../assets/imagesabout/span.each-object.png'

const AboutHero = () => {
    return (
        <div className='md:h-screen h-full w-full relative container-p pt-15 md:bg-contain bg-cover bg-right bg-black bg-no-repeat ' style={{ backgroundImage: `url(${isobg})` }}>
            <div className='lg:py-20 md:py-15 py-20  h-full text-white max-w-xl flex flex-col justify-center '>
                <div className='flex flex-col gap-10 sm:pl-12'>
                    <div className='md:text-8xl sm:text-6xl text-2xl font-bold'><span>ABOUT</span> <span className='md:text-6xl sm:text-4xl text-lg'>US</span></div>
                    <div className='flex sm:flex-nowrap flex-wrap'>
                        <p>
                            We are a creative agency that specializes in
                            providing high-quality design and branding
                            solutions to businesses.
                        </p>
                        <div className='hidden sm:block'>
                            <img src={tweet} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <img className='absolute z-10 left-0 bottom-0' src={wheel} alt="" />
            <img className='absolute md:top-[10%] md:left-[45%] top-[20%] left-[80%] w-[15%]' src={rocket} alt="" />
        </div>
    )
}

export default AboutHero
