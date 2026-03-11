import React, { useEffect, useState } from 'react'
import serbg from '../assets/images/Image-2.png'
import ser21 from '../assets/images/image-21.png'
import ser22 from '../assets/images/image-22.png'
import { FiArrowRight } from 'react-icons/fi'


const Services = () => {
    let [current,setCurrent]=useState(1)
    let [istranstion,setisTrastion]=useState(true)

    const service = [
        {
            title: "Development",
            description:
                "We build modern, scalable websites and applications that help businesses grow and perform efficiently across all platforms.",
            mainImg: ser21,
            sideImg: ser22,
            list: [
                "UI/UX Design",
                "Web Development",
                "Mobile App Development",
                "E-commerce Solutions",
                "Custom Web Applications",
                "CRM / ERP Systems",
            ],
        },

        {
            title: "Photoshopy",
            description:
                "We provide professional photo editing and creative design services that transform ordinary images into stunning visuals for brands, businesses, and personal projects.",
            mainImg: ser22,
            sideImg: ser21,
            list: [
                "Photo Retouching",
                "Background Removal",
                "Color Correction",
                "Image Manipulation",
                "Product Photo Editing",
                "Creative Poster",
            ],
        },
    ];

    let extendSlides = [service[service.length-1],...service,service[0]]
    let nextSlide = ()=>{
        setCurrent(prev=>prev+1)
    }
    useEffect(()=>{
        if(current==service.length+1){
            setTimeout(()=>{
                setCurrent(1)
                setisTrastion(false)
            },900)
        }

    },[current])

    useEffect(()=>{
       setTimeout(()=>{
         setisTrastion(true)
       },50)
    },[istranstion])
    console.log(current)
    return (
        <div className='md:h-auto h-auto relative md:py-15  text-white'>
            <div className='bg-center  absolute inset-0 bg-cover z-0' style={{ backgroundImage: `url(${serbg})` }}></div>
            <div className='absolute inset-0 bg-black/60 backdrop-blur-lg'></div>

            <div className='container-p w-full h-full  flex flex-col md:py-0 py-10 justify-center gap-10 relative '>
                <h1 className='text-5xl font-semibold'>Services</h1>

                <div className='h-full flex flex-row '>
                 
                    {
                        extendSlides.map((item, idx) => {
                            
                            return (
                                <div key={idx} style={{
                                    transform: `translateX(-${current * 100}%)`,
                                    transition: istranstion?"transform 0.9s ease":''
                                    }} 
                                    className={`flex min-w-full justify-center lg:flex-nowrap  flex-wrap pr-1 mr-1 items-stretch gap-5 `}
                                >
                                    <div className='max-w-[250px] w-full flex justify-center items-center'>
                                        <img className=' w-full overflow-hidden object-cover' src={item.mainImg} alt="" />
                                    </div>
                                    <div className=' flex flex-col justify-between items-start gap-4 '>
                                        <h2 className='text-3xl'>{item.title}</h2>
                                        <p className='text-sm'>{item.description}</p>
                                        <div className='border-t w-full'>

                                        </div>
                                        <ul className='text-xs flex flex-col gap-2'>
                                            {item.list.map((listItem, idx) => <li> <span>//</span> {listItem}</li>)}
                                        </ul>
                                        <button className='border rounded-md px-3 py-2 text-xs font-medium'>START A PROJECT</button>
                                    </div>

                                    {/* button */}
                                    <div className=' flex justify-center items-center '>
                                        <div onClick={nextSlide} className='cursor-pointer block md:p-8 p-4 rounded-full bg-black shadow-[inset_0px_0px_16px_0px_gray,_0px_0px_2px_1px_black] '>
                                            <FiArrowRight className='md:text-4xl text-2xl ' />
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-center  justify-center'>
                                        <div className="w-[160px] h-[160px]  overflow-hidden">
                                            <img
                                                src={item.sideImg}
                                                className="w-full h-full object-cover"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Services