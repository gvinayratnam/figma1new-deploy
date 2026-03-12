import React, { useEffect, useMemo, useRef, useState } from 'react'
import serbg from '../assets/images/Image-2.png'
import ser21 from '../assets/images/image-21.png'
import ser22 from '../assets/images/image-22.png'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const SERVICE_DATA = [
  {
    title: "Development",
    description:
      "We build modern, scalable websites and applications that help businesses grow and perform efficiently across all platforms.",
    mainImg: ser21,
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
    list: [
      "Photo Retouching",
      "Background Removal",
      "Color Correction",
      "Image Manipulation",
      "Product Photo Editing",
      "Creative Poster",
    ],
  },
]

const CLONE_COUNT = 2
const REAL_SLIDE_COUNT = SERVICE_DATA.length
const INITIAL_INDEX = CLONE_COUNT
const END_CLONE_INDEX = CLONE_COUNT + REAL_SLIDE_COUNT
const REAL_END_INDEX = CLONE_COUNT + REAL_SLIDE_COUNT - 1

const Services2 = () => {
  const [current, setCurrent] = useState(INITIAL_INDEX)
  const [isTransition, setIsTransition] = useState(true)

  // ✅ All touch values as refs — zero re-renders during drag = no shivering
  const touchStartRef = useRef(null)
  const touchEndRef = useRef(null)
  const dragRef = useRef(0)
  const isDragging = useRef(false)
  const timerRef = useRef(null)

  // ✅ Ref to every slide DOM element so we can update transform directly
  const slideRefs = useRef([])

  const extendSlides = useMemo(() => [
    SERVICE_DATA[SERVICE_DATA.length - 2],
    SERVICE_DATA[SERVICE_DATA.length - 1],
    ...SERVICE_DATA,
    SERVICE_DATA[0],
    SERVICE_DATA[1],
  ], [])

  // Helper — directly writes transform on all slides without React re-render
  const updateSlideTransforms = (currentIdx, dragPercent, withTransition) => {
    slideRefs.current.forEach(el => {
      if (!el) return
      el.style.transition = withTransition ? 'transform 0.9s ease' : 'none'
      el.style.transform = `translateX(calc(-${currentIdx * 100}% + ${dragPercent}%))`
    })
  }

  // Infinite loop — silently jump from clone to real slide
  useEffect(() => {
    if (current === END_CLONE_INDEX) {
      setTimeout(() => {
        setIsTransition(false)
        setCurrent(INITIAL_INDEX)
      }, 900)
    } else if (current === CLONE_COUNT - 1) {
      setTimeout(() => {
        setIsTransition(false)
        setCurrent(REAL_END_INDEX)
      }, 900)
    }
  }, [current])

  // Re-enable transition after silent jump — only when NOT dragging
  useEffect(() => {
    if (!isTransition) {
      if (isDragging.current) return  // ✅ don't re-enable during drag
      const timer = setTimeout(() => setIsTransition(true), 50)
      return () => clearTimeout(timer)
    }
  }, [isTransition])

  // Sync all slide DOM elements whenever current or isTransition changes via React
  useEffect(() => {
    updateSlideTransforms(current, 0, isTransition)
  }, [current, isTransition])

  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  const nextSlide = () => {
    if (!isTransition) return  // block if mid-animation or mid-jump
    setIsTransition(true)
    setCurrent(prev => prev + 1)
  }

  const prevSlide = () => {
    if (!isTransition) return
    setIsTransition(true)
    setCurrent(prev => prev - 1)
  }

  const onTouchStart = (e) => {
    if (window.innerWidth > 768) return
    isDragging.current = true          // ✅ tell useEffect to stay out
    touchStartRef.current = e.targetTouches[0].clientX
    touchEndRef.current = null
    dragRef.current = 0
    // disable transition directly on DOM — no React re-render, no useEffect trigger issues
    slideRefs.current.forEach(el => {
      if (el) el.style.transition = 'none'
    })
  }

  const onTouchMove = (e) => {
    if (window.innerWidth > 768 || touchStartRef.current === null) return
    const currentX = e.targetTouches[0].clientX
    touchEndRef.current = currentX
    const distanceGap = currentX - touchStartRef.current
    const percentDrag = (distanceGap / window.innerWidth) * 100
    dragRef.current = percentDrag * 0.8

    // ✅ Update DOM directly — no setState, no re-render, buttery smooth
    updateSlideTransforms(current, dragRef.current, false)
  }

  const onTouchEnd = () => {
    if (window.innerWidth >= 768) return

    isDragging.current = false  // ✅ allow useEffect to work again

    if (!touchStartRef.current || !touchEndRef.current) {
      // No real swipe — snap back
      updateSlideTransforms(current, 0, true)
      touchStartRef.current = null
      touchEndRef.current = null
      dragRef.current = 0
      return
    }

    const touchDistance = touchStartRef.current - touchEndRef.current
    const swipePercent = (Math.abs(touchDistance) / window.innerWidth) * 100

    if (swipePercent > 20) {
      // Re-enable transition state BEFORE calling next/prev
      // so the !isTransition guard lets it through
      setIsTransition(true)
      if (touchDistance > 0) nextSlide()
      else prevSlide()
    } else {
      // Not enough — snap back smoothly
      updateSlideTransforms(current, 0, true)
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setIsTransition(true), 900)
    }

    touchStartRef.current = null
    touchEndRef.current = null
    dragRef.current = 0
  }

  return (
    <div className='md:h-auto h-auto relative md:py-15 text-white'>
      <div
        className='bg-center absolute inset-0 bg-cover z-0'
        style={{ backgroundImage: `url(${serbg})` }}
      />
      <div className='absolute inset-0 bg-black/60 backdrop-blur-lg' />

      <div className='container-p w-full h-full flex flex-col md:py-0 py-10 justify-center gap-10 relative'>
        <h1 className='text-5xl font-semibold'>Services</h1>

        <div
          role="region"
          aria-label="Services carousel"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className='h-full flex flex-row overflow-hidden'
        >
          {extendSlides.map((item, idx) => (
            <div
              key={idx}
              ref={el => slideRefs.current[idx] = el}  // ✅ collect DOM refs
              style={{
                // initial style only — after mount, DOM is updated directly
                transform: `translateX(-${INITIAL_INDEX * 100}%)`,
                transition: 'transform 0.9s ease',
              }}
              className='flex md:min-w-[88%] min-w-full justify-start md:flex-row flex-col pr-2 md:mr-0 mr-1 md:items-stretch items-center gap-5 relative'
              aria-roledescription="slide"
              aria-label={`${item.title} slide`}
            >
              {/* Image */}
              <div className='lg:max-w-[250px] max-w-[230px] w-full flex items-center justify-center'>
                <img
                  className='w-full md:h-full overflow-hidden lg:object-cover object-contain'
                  style={{
                    transform: idx === current + 1
                      ? 'translateX(-30%) scale(0.4)'
                      : 'scale(1)',
                    transition: isTransition ? 'transform 0.9s ease' : '',
                  }}
                  src={item.mainImg}
                  alt={item.title}
                />
              </div>

              {/* Content */}
              <div className='flex flex-col justify-between items-start lg:gap-4 gap-2'>
                <h2 className='text-3xl'>{item.title}</h2>
                <p className='lg:text-sm text-xs leading-tight'>{item.description}</p>
                <div className='border-t w-full' />
                <ul className='text-xs grid lg:grid-cols-1 grid-cols-2 lg:gap-3 gap-2'>
                  {item.list.map((listItem, listIdx) => (
                    <li key={listIdx} className='flex gap-1'>
                      <span className='text-[#07C42C]'>//</span>
                      <span>{listItem}</span>
                    </li>
                  ))}
                </ul>
                <button className='border rounded-md lg:px-3 px-2 lg:py-2 py-1 text-xs font-medium cursor-pointer'>
                  START A PROJECT
                </button>
              </div>

              {/* Prev / Next buttons */}
              <div className='flex justify-center items-center gap-3 md:static fixed bottom-1 right-3'>
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className='cursor-pointer lg:p-6 p-2 rounded-full bg-black shadow-[inset_0px_0px_16px_0px_gray,_0px_0px_2px_1px_black]'
                >
                  <FiArrowLeft aria-hidden="true" className='md:text-3xl sm:text-2xl text-xl' />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className='cursor-pointer lg:p-6 p-2 rounded-full bg-black shadow-[inset_0px_0px_16px_0px_gray,_0px_0px_2px_1px_black]'
                >
                  <FiArrowRight aria-hidden="true" className='md:text-3xl sm:text-2xl text-xl' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services2
