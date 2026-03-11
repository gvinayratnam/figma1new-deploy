import React from 'react'
import process1 from '../assets/images/process-1.png'
import process2 from '../assets/images/process-2.png'
import process3 from '../assets/images/process-3.png'

const Process = () => {
    return (
        <div className='lg:h-screen h-auto w-full bg-[#0A0A0A] text-white'>
            <div className='container-p w-full h-full py-15'>
                <h1 className='text-5xl font-semibold mb-10'>The Process</h1>
                <div className=' lg:relative w-full h-full  border-red-100 h-auto flex gap-5 flex-col justify-evenly'>

                    <div className='lg:absolute left-[0%] top-0  border border-gray-700 [background:linear-gradient(135deg,_#404040,_#002A08)] hover:[background:linear-gradient(135deg,_#000,_#002B08,_#000,_#002B08,_#000)] hover:border-green-600/80 hover:z-1 sm:p-5 p-2  sm:py-9 py-5 flex flex-col sm:gap-5 gap-2 lg:w-2/5'>
                        <div className='flex sm:flex-col justify-start items-center sm:items-start gap-2'>
                            <img className='w-[75px]' src={process1} alt="" />
                            <h2 className='text-xl'>Mission</h2>
                        </div>
                        <div className=' flex flex-col gap-2 items-start'>
                            <p >Empowering Businesses Through Technology</p>
                            <div className='border-b-[1px] w-full border-gray-700'></div>
                            <div className='flex justify-center items-center '>
                                <h1 className='text-7xl '>S1</h1>
                                <p className='text-xs font-thin text-gray-400 leading-tight'>I begin by clarifying your goals, audience, and market fit.
                                    The insights set a clear direction and define what
                                    success means for you.</p>
                            </div>
                        </div>

                    </div>

                    <div  className='lg:absolute left-[30%] top-15 border border-gray-700 bg-black sm:p-5 p-2  sm:py-9 py-5  flex flex-col sm:gap-5 gap-2  lg:w-2/5 hover:[background:linear-gradient(135deg,_#000,_#002B08,_#000,_#002B08,_#000)] hover:border-green-600/80 hover:z-1'>
                       <div className='flex sm:flex-col justify-start items-center sm:items-start gap-2'>
                         <img className='w-[75px]' src={process2} alt="" />
                        <h2 className='text-xl'>Vision</h2>
                       </div>
                        <div className=' flex flex-col gap-2 items-start'>
                            <p>Building a Future-Ready Digital World</p>
                            <div className='border-b-[1px] w-full border-gray-700'></div>
                            <div className='flex justify-center items-center '>
                                <h1 className='text-7xl '>S2</h1>
                                <p className='text-xs font-thin text-gray-400 leading-tight'>I translate strategy into visual identity and page
                                    structure. Every element serves a purpose—clean,
                                    accessible, and ready for growth.</p>
                            </div>
                        </div>

                    </div>

                    <div  className='lg:absolute left-[60%] top-30 border border-gray-700 bg-black sm:p-5 p-2  sm:py-9 py-5  flex flex-col sm:gap-5 gap-2   lg:w-2/5 hover:[background:linear-gradient(135deg,_#000,_#002B08,_#000,_#002B08,_#000)] hover:border-green-600/80 hover:z-1'>
                        <div className='flex sm:flex-col justify-start items-center sm:items-start gap-2'>
                            <img className='w-[75px]' src={process3} alt="" />
                        <h2 className='text-xl'>Goals</h2>
                        </div>
                        <div className=' flex flex-col gap-2 items-start'>
                            <p>Driving Measurable Business Success</p>
                            <div className='border-b-[1px] w-full border-gray-700'></div>
                            <div className='flex justify-center items-center '>
                                <h1 className='text-7xl '>S3</h1>
                                <p className='text-xs font-thin text-gray-400 leading-tight'>I build and launch your site in Framer or Webflow,
                                    then hand over an easy editor. You stay in control,
                                    with fast performance and room to scale.</p>
                            </div>
                        </div>

                    </div> 
                </div>
            </div>
        </div>

    )
}

export default Process
