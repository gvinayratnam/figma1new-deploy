import React, { useEffect, useState } from 'react'
import serbg from '../assets/images/Image-2.png'
import ser21 from '../assets/images/image-21.png'
import ser22 from '../assets/images/image-22.png'
import { FiArrowRight } from 'react-icons/fi'


const Services2 = () => {
    let [current, setCurrent] = useState(2)
    let [istranstion, setisTrastion] = useState(true)
    let [touchStart, setTouchStart] = useState(null)
    let [touchEnd, setTouchEnd] = useState(null)

    const service = [
        {
            title: "Development",
            description:
                "We build modern, scalable websites and applications that help businesses grow and perform efficiently across all platforms.",
            mainImg: ser21,
            // sideImg: ser22,
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
            // sideImg: ser21,
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

    let extendSlides = [service[service.length - 2], service[service.length - 1], ...service, service[0], service[1]]
    let nextSlide = () => {
        if (!istranstion) return;
        setCurrent(prev => prev + 1)
    }
    let prevSlide = () => {
        if (!istranstion) return;
        setCurrent(prev => prev - 1)
    }
    useEffect(() => {
        if (current === extendSlides.length - 2) {
            setTimeout(() => {
                setisTrastion(false)
                setCurrent(2)
            }, 900)
        }
        else if (current === 1) {
            setTimeout(() => {
                setisTrastion(false)
                setCurrent(extendSlides.length - 3)
            }, 900)
        }
    }, [current])

    useEffect(() => {
        if (!istranstion) {
            const transTimer = setTimeout(() => {
                setisTrastion(true)
            }, 50);
            return () => clearTimeout(transTimer)
        }
    }, [istranstion])
    console.log(current)

    const ontouchStart = (e) => {
        console.log(e)
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }
    const ontouchMoves = (e) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }
    const ontouchEnd = () => {
        if (window.innerWidth > 768) return;
        if (!touchStart || !touchEnd) return;

        const touchDistance = touchStart - touchEnd
        touchDistance > 0 ? nextSlide() : prevSlide()

    }
    console.log(touchStart)
    return (
        <div className='md:h-auto h-auto relative md:py-15  text-white'>
            <div className='bg-center  absolute inset-0 bg-cover z-0' style={{ backgroundImage: `url(${serbg})` }}></div>
            <div className='absolute inset-0 bg-black/60 backdrop-blur-lg'></div>

            <div className='container-p w-full h-full  flex flex-col md:py-0 py-10 justify-center gap-10 relative '>
                <h1 className='text-5xl font-semibold'>Services</h1>

                <div
                    onTouchStart={ontouchStart}
                    onTouchMove={ontouchMoves}
                    onTouchEnd={ontouchEnd}
                    className='h-full flex flex-row overflow-hidden'>

                    {
                        extendSlides.map((item, idx) => {

                            return (
                                <div key={idx} style={{
                                    transform: `translateX(-${current * 100}%)`,
                                    transition: istranstion ? "transform 0.9s ease" : ''

                                }}
                                    className={`flex md:min-w-[88%] min-w-full justify-start md:flex-row flex-col pr-2 md:mr-0 mr-1 md:items-stretch items-center gap-5 relative`}
                                >
                                    <div className='lg:max-w-[250px] max-w-[230px]  w-full  flex items-center justify-center'>
                                        <img className={` w-full md:h-full overflow-hidden lg:object-cover object-contain`}
                                            style={{
                                                transform: idx === current + 1
                                                    ? `translateX(-30%) scale(0.4)`
                                                    : `scale(1)`,
                                                transition: istranstion ? "transform 0.9s ease" : ''
                                            }}
                                            src={item.mainImg} alt=""
                                        />
                                    </div>
                                    <div className=' flex flex-col justify-between items-start lg:gap-4 gap-2'>
                                        <h2 className='text-3xl'>{item.title}</h2>
                                        <p className='lg:text-sm text-xs leading-tight'>{item.description}</p>
                                        <div className='border-t w-full'>

                                        </div>
                                        <ul className='text-xs grid lg:grid-cols-1 grid-cols-2 lg:gap-3 gap-2'>
                                            {item.list.map((listItem, idx) => <li className='flex gap-1'> <span className='text-[#07C42C]'>//</span> <span>{listItem}</span></li>)}
                                        </ul>
                                        <button className='border rounded-md lg:px-3 px-2 lg:py-2 py-1 text-xs font-medium '>START A PROJECT</button>
                                    </div>

                                    {/* button */}
                                    <div className=' flex justify-center items-center  md:static fixed bottom-1 right-3'>
                                        <div onClick={nextSlide} className='cursor-pointer lg:p-6 p-2 rounded-full bg-black shadow-[inset_0px_0px_16px_0px_gray,_0px_0px_2px_1px_black] '>
                                            <FiArrowRight className='md:text-3xl sm:text-2xl text-xl' />
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

export default Services2