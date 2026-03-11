import React, { useState } from 'react'
import aboutbg from '../assets/images/aboutbg.png'

const About = () => {
// let [input,setinput] = useState({
//     name:'',
//     nameStatus:true,
//     email:'',
//     emailStatus:true,
//     project:'',
//     projectStatus:true,
// })

// function checkChar(value,status){
//     for(let i=0;i<value.length;i++){
//         console.log(value,status)
//         if((value[i]>'a'|| value[i]<'z' )&&(value[i]>'A'|| value[i]<"Z")) {
//             console.log('True')
//             // setinput({...input,status:true})
//         }
//         // return  setinput({...input,status:false})
//     }
// }
// let charonly = (e) =>{
//     setinput({...input,[e.target.name]:e.target.value})
//     console.log(input)
//     checkChar(e.target.value,e.target.name)
// }


    return (
        <div className=' bg-black'>
            <div className='w-full  relative '>
                <img className='absolute  top-0' src={aboutbg} alt="" />

                <div className=' w-full relative container-p flex flex-col justify-center items-center z-10  text-white lg:py-35 sm:py-20 py-10'>
                    <div className='md:w-[70%] '>
                        <h1 className='text-right w-full lg:text-6xl md:text-5xl sm:text-4xl text-xl sm:mb-20 mb-10 md:mb-35 '>Let’s start <br />creating together</h1>
                        <form className='w-full flex flex-col sm:gap-10 gap-5' action="">
                            <div className='flex  sm:flex-nowrap flex-wrap sm:gap-10 gap-5'>    
                                <div className="relative w-full">
                                    <input
                                        name='name'
                                        // value={input.name}
                                        // onChange={e=>charonly(e)}
                                        type="text"
                                        placeholder="Name"
                                        className={`peer focus:outline-none px-1 w-full py-3 rounded-md border-b-2 border-gray-700/50  placeholder:text-[#FFFFFFA3]`}
                                    />

                                    <span className="absolute left-[47px] top-1/2 -translate-y-1/2 text-[#07C42C] 
                                    peer-focus:hidden peer-[&:not(:placeholder-shown)]:hidden">
                                        *
                                    </span>
                                </div>

                                <div className="relative w-full">
                                    <input
                                        //  onChange={e=>charonly(e)}
                                        type="text"
                                        name = 'email'
                                        // value={input.email}
                                        placeholder="Email"
                                        className="peer w-full focus:outline-none px-1 py-3 rounded-md border-b-2 border-gray-700/50 placeholder:text-[#FFFFFFA3]"
                                    />

                                    <span className="absolute left-[44px] top-1/2 -translate-y-1/2 text-[#07C42C]  
                                    peer-focus:hidden peer-[&:not(:placeholder-shown)]:hidden ">
                                        *
                                    </span>
                                </div>
                            </div>

                            <div className='flex  sm:flex-nowrap flex-wrap sm:gap-10 gap-5'>
                                <select className="w-full py-3 focus:outline-none px-1 rounded-md border-b-2 border-gray-700/50 text-[#FFFFFFA3]">
                                    <option value="You are interested in" >You are interested in</option>
                                </select>
                                <select className="w-full py-3 focus:outline-none px-1 border-b border-gray-700/50 text-[#FFFFFFA3]">
                                    <option value="Budget in USD">Budget in USD</option>
                                </select>
                            </div>

                            <div>
                                <input className='placeholder:text-[#FFFFFFA3] w-full py-3 rounded-md border-b-2 border-gray-700/50 focus:outline-none px-1' type="text" placeholder='Project details'  name="project"  id="" />
                            </div>

                            <div className='flex lg:flex-row gap-3 flex-col justify-between items-center'>
                                <button className='text-xs border rounded-md cursor-pointer px-4 py-2'>SUBMIT MESSAGE</button> <p className='sm:text-base text-xs'><span>say hello - </span><span className='text-[#07C42C]'><a href="mailto:hello@kbkbusinesssolutions.com">hello@kbkbusinesssolutions.com</a></span></p>
                            </div>
                        </form>
                    </div>

                </div>

                <div className='container-p text-white relative z-10'>
                    <div className=' w-full flex flex-col sm:flex-row sm:justify-between'>
                        <div >
                            <div className='flex gap-2 sm:justify-start justify-center items-center '>
                                <div className='h-2 w-2 bg-[#07C42C] shadow-[0px_0px_3px_2px_#07C42C]  rounded-full'></div>
                                <p >WORKING GLOBALLY</p>
                            </div>
                        </div>
                        
                        <div className='flex sm:w-2/3 w-full sm:justify-between  justify-evenly sm:gap-0 gap-5 lg:pr-35'>
                            <div className='flex sm:gap-10 gap-3 flex-row  justify-center sm:flex-nowrap flex-wrap'>
                                <p className='text-xs w-full'>SITEMAP</p>
                                <ul className='md:text-3xl'>
                                    <li>About</li>
                                    <li>Works</li>
                                    <li>Services</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className='flex  sm:gap-10 gap-3  justify-center sm:gap-10 sm:flex-nowrap flex-wrap flex-row'>
                                <p className='text-xs w-full'>
                                    SOCIALS
                                </p>
                                <ul className='md:text-3xl'>
                                    <li>Twitter (X)</li>
                                    <li>Dribbble</li>
                                    <li>LinkedIn</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
