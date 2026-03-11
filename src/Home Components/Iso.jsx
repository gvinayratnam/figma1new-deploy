import React from 'react'
import bharathsir from '../assets/images/isobharthsir.png'
import isobg from '../assets/images/isobg.png'
import isologo from '../assets/images/iso1.png'

const Iso = () => {
    const services = [
        {
            title: "Web Development & E-commerce Solutions",
            description: "Custom websites, business portals, and scalable web applications."
        },
        {
            title: "UI/UX Design & Product Design",
            description: "User-focused design for better engagement and seamless experiences."
        },
        {
            title: "Digital Marketing & SEO",
            description: "Data-driven marketing strategies to increase visibility and generate leads."
        },
        {
            title: "Social Media & Performance Marketing",
            description: "Building brand awareness and driving measurable business growth."
        },
        {
            title: "Digital Media Studio",
            description: "Managing and growing your brand across digital platforms to reach the right audience."
        }
    ];
    return (
        <div className='lg:bg-cover  bg-no-repeat bg-center text-white container-p lg:py-40 relative pt-20' style={{ backgroundImage: `url(${isobg})` }}>
            <div className='absolute inset-0 bg-black/30 '></div>
            <div className='flex lg:flex-row  flex-col justify-center gap-2 lg:pb-0 pb-10 items-center'>
                 
                <div className=' flex  items-center   md:w-[40%]  w-[50%]'>
                    
                   <div className=' relative'>
                    <div className='absolute rounded-xl inset-0 bg-radial-[at_50%_10%] from-transparent to-black to-95%'>
                        
                    </div> 
                     <img className='' src={bharathsir} alt="" />
                    <h1 className='ephesis-regular lg:text-3xl  sm:text-2xl text-xl  absolute bottom-1  left-[28%] -rotate-5'>Bharath Kumar</h1>
                   </div>
                </div>
                <div className='w-[14%] px-5 '>
                    <img className='w-full' src={isologo} alt="" />
                </div>
                <div className='flex flex-col  justify-between gap-10  lg:w-2/4'>
                    
                    <div> 
                        <p className='text-sm md:text-xl  font-thin'>KBK Business Solutions helps businesses grow with smart IT solutions and digital marketing. We create websites, mobile apps, user-friendly designs, and online marketing strategies to improve visibility and business performance.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-xs text-gray-400 lg:text-left text-center'>Our Expertise</h1>
                        {services.map((service, index) => (
                            <div key={index} className='text-sm flex flex-col lg:text-left text-center lg:items-start items-center'>
                                <h3>{service.title}</h3>
                                <p className='text-[#00C950] lg:text-left text-center'>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Iso
