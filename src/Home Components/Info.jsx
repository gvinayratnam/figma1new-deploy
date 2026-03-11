import React, { useEffect, useRef, useState } from 'react'
import bg1 from '../assets/images/info1.png'
import arunkumar from '../assets/images/arunkumar.png'
import jayavaishnavi from '../assets/images/jayavaishnavi.png'
import srikanthreddy from '../assets/images/srikanthreddy.png'
import { Collapse, DatePicker } from 'antd'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const Info = () => {
    const faqData = [
        {
            question: "How long does a project usually take?",
            answer: "Project timelines vary depending on complexity, but most projects take 2–6 weeks."
        },
        {
            question: "Do you work with international clients?",
            answer: "Yes, I collaborate with clients worldwide using online meetings and project tools."
        },
        {
            question: "Can you help with both design and development?",
            answer: "Yes, I handle both UI/UX design and full development."
        },
        {
            question: "What's your payment process?",
            answer: "Usually 50% upfront and 50% after completion."
        },
        {
            question: "Do you provide ongoing support after launch?",
            answer: "Yes, I offer maintenance and support after deployment."
        }
    ];

    const items = faqData.map((item, index) => ({
        key: index + 1,
        label: (
            <div className="flex   gap-6  text-gray-100">
                <span className="w-10 ">
                    {(index + 1).toString().padStart(2, "0")}
                </span>
                <span>{item.question}</span>
            </div>
        ),
        children: (
            <div className="px-16 text-gray-100">
                {item.answer}
            </div>
        )
    }));

    let names = [
        {
            "title": "Projects Delivered",
            "value": 40,
            "description": "Creative work that drive real results"
        },
        {
            "title": "Clients Satisfaction",
            "value": 96,
            "description": "I mostly focus on exceeding expectations"
        },
        {
            "title": "Years of Experience",
            "value": 15,
            "description": "Mastering the art of animation content and design"
        }
    ]
    let members = [
        {
            "name": "Srikanth Reddy",
            "username": srikanthreddy,
            "title": "General Manager",
            "description": "A passionate professional dedicated to delivering quality solutions, innovative ideas, and reliable support to help clients achieve their business goals."
        },
        {
            "name": "Jaya Vyshnavi K",
            "username": jayavaishnavi,
            "title": "Director- Human Resources",
            "description": "Experienced and committed to driving innovation, ensuring project quality, and delivering successful digital solutions for our clients."
        },
        {
            "name": "Arun Kumar J",
            "username": arunkumar,
            "title": "HR & Immigration Manager",
            "description": "Part of the core team behind KBK Business Solutions, working to deliver innovative technology and digital growth solutions."
        }
    ]
    const sectionRef = useRef(null);
    let [count,setCount] = useState(names.map(()=>0))
    let [start,setStart] = useState(false)
    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    setStart(true)
                }
                console.log(entry)
            },{threshold:0.5}
        );
        if(sectionRef.current){
            observer.observe(sectionRef.current)
        }
        console.log(observer)
        return () => observer.disconnect()
    },[])

    useEffect(()=>{
        if(!start) return;

        const interval = setInterval(()=>{
            setCount(prev=>prev.map((num,i)=>{
                            if (num<names[i].value){
                                return num+1
                            }
                            return num
                        })
            )
        },16)
        
        console.log(interval)
        return ()=> clearInterval(interval)
    },[start])

    return (
        <div className=''>
            <div>
                <div className=' text-white bg-black relative py-5'>
                    <img className='absolute top-0' src={bg1} alt="" />
                    <h1 className='text-white relative z-10 text-center font-semibold sm:text-2xl text-lg py-5 sm:py-10'>TRUSTED BY FOUNDED</h1>
                    <div className='flex flex-col lg:gap-30 md:gap-20 sm:gap-15 gap-10 relative z-10'>
                        <div className='flex sm:flex-row flex-col '>
                            {
                                members.map((item,idx) => {
                                    return (
                                        <div key={idx} className='sm:w-1/3'>
                                            <div className='flex flex-col justify-center items-center p-5 '>
                                                <div className=' relative '>
                                                    <div className='p-2 '>
                                                        <img className=' ' src={item.username} alt="" />
                                                    </div>
                                                    <h1 className='absolute bottom-[9%] text-center text-xs  w-full' >{item.name}</h1>
                                                    <p className='absolute bottom-[5%] text-center text-xs  w-full'>{item.title}</p>
                                                </div>
                                                <div>
                                                    <p className='text-xs text-center'>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div ref={sectionRef} className='container-p '>
                            <div className='flex flex-col sm:flex-row justify-evenly  text-white md:gap-25 gap-15 w-full  '>
                                {
                                    names.map((item, idx) => {
                                        return (
                                            <div key={idx} className='text-center   text-xs flex flex-col gap-2 justify-center items-center'>
                                                <p><span className='text-[#07C42C]'>// </span>{item.title}</p>
                                                <h1 className='text-6xl '>{count[idx]}<span className='text-[#07C42C]'>{idx == 1 ? '%' : '+'}</span></h1>
                                                <p className='text-center  max-w-2/3'>{item.description}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div>
                            <div className='text-white container-p'>
                                <h1 className='sm:text-5xl  text-4xl text-center md:py-10 xl:mt-10 mb-5'>Frequently <br /> asked questions</h1>
                                <div className='text-white flex justify-center '>
                                    <Collapse
                                    // style={{
                                    //     width:'70%'
                                    // }}
                                    className='md:w-[70%] w-full'
                                        items={items}
                                        ghost
                                        expandIconPlacement="end"
                                        expandIcon={({ isActive }) => (
                                            <FiChevronDown
                                                size={18}
                                                style={{
                                                    transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                                                    transition: "0.3s",
                                                    color:'white'
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Info
