import React, { useEffect, useState } from 'react'
import tech1 from '../assets/images/tech1.svg'
import tech2 from '../assets/images/tech2.svg'
import tech3 from '../assets/images/tech3.svg'
import tech4 from '../assets/images/tech4.svg'
import tech5 from '../assets/images/tech5.svg'
import tech6 from '../assets/images/tech6.svg'
import tech7 from '../assets/images/tech7.svg'
import tech8 from '../assets/images/tech8.svg'
import tech9 from '../assets/images/tech9.svg'
import tech10 from '../assets/images/tech10.svg'
import browse from '../assets/images/browse-svgrepo-com.svg'
import camera from '../assets/images/camera-svgrepo-com.svg'
import date from '../assets/images/date-svgrepo-com.svg'
import document from '../assets/images/document-svgrepo-com.svg'
import hornor from '../assets/images/honor-svgrepo-com.svg'
import inspiration from '../assets/images/inspiration-svgrepo-com.svg'
import line from '../assets/images/line-graph-svgrepo-com.svg'
import picture from '../assets/images/picture-svgrepo-com.svg'
import pie from '../assets/images/pie-chart-svgrepo-com.svg'
import table from '../assets/images/table-of-contents-svgrepo-com.svg'
import airplane from '../assets/images/airplane-svgrepo-com.svg'
import coconut from '../assets/images/coconut-tree-svgrepo-com.svg'
import hotel from '../assets/images/hotel-svgrepo-com.svg'
import icecream from '../assets/images/ice-cream-svgrepo-com.svg'
import lighthouse from '../assets/images/lighthouse-svgrepo-com.svg'
import milktea from '../assets/images/milk-tea-svgrepo-com.svg'
import pole from '../assets/images/polaroid-svgrepo-com.svg'
import sunbath from '../assets/images/sunbathing-svgrepo-com.svg'
import bath from '../assets/images/take-a-bath-svgrepo-com.svg'
import wine from '../assets/images/wine-svgrepo-com.svg'


const Techstack = () => {
    let [gradindex, setGradindex] = useState([])
    let [logos,setLogos]= useState(0)
    let logos1 = [tech1, tech2, tech3, tech4, tech5, tech6, tech7, tech8, tech9, tech10]
    let logos2 = [browse,camera,date,document,hornor,inspiration,line,picture,pie,table]
    let logos3 = [airplane,coconut,hotel,icecream,lighthouse,milktea,pole,sunbath,bath,wine]
    const mlogo = [logos1,logos2,logos3]
  
  
   
    useEffect(() => {
        const interval = setInterval(() => {
            const randDiv = []
            for (let i = 0; i < 3; i++) {
                randDiv.push(Math.floor(Math.random() * 10))
                
            }
            setGradindex(randDiv)

            setTimeout(() => {
                setGradindex([])
            },1000)
        }, 2000);
        return ()=> clearInterval(interval)
    }, [])

    return (
        <div className='bg-black text-white container-p'>
            <div className='w-full py-15'>
                <div>
                    <h1 className='text-[70%] text-center text-gray-400 my-5'>OUR TECH STACK</h1>
                    <div className='flex justify-center sm:flex-nowrap flex-wrap items-center gap-2 sm:gap-10'>
                        <button onClick={()=>setLogos(0)} className={`${logos==0?'bg-white text-black':'bg-white/25'} border border-white sm:px-13 px-5 py-1 rounded-lg hover:text-black hover:bg-white sm:text-sm text-xs font-medium cursor-pointer`}>Dev</button>
                        <button onClick={()=>setLogos(1)} className={`${logos==1?'bg-white text-black':'bg-white/25'} border border-white sm:px-13 px-5 py-1 rounded-lg hover:text-black hover:bg-white sm:text-sm text-xs font-medium cursor-pointer`}>Dm</button>
                        <button onClick={()=>setLogos(2)} className={`${logos==2?'bg-white text-black':'bg-white/25'} border border-white sm:px-13 px-5 py-1 rounded-lg hover:text-black hover:bg-white sm:text-sm text-xs font-medium cursor-pointer`}>Media</button>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center pt-5'>

                    {
                        mlogo[logos].map((item, idx) => {
                            const active = gradindex.includes(idx);
                            return (
                                <div key={idx} className={`w-1/5  lg:h-40 md:h-30 sm:h-20 h-15    flex justify-center items-center ${active?"[background:linear-gradient(135deg,_#000,_#1fc43d,_#000,_#1fc43d,_#000)]":""}`}>
                                    <img className={`sm:h-5 h-4 transition-transform duration-300 hover:scale-125 `} src={item} key={idx}></img>
                                   
                                </div>
                            )
                        })
                    }
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Techstack




