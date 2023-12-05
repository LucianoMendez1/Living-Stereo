import React, { useEffect } from 'react'
import { Power4, gsap } from 'gsap'

const Preload = () => {

  useEffect(() => {

    const tl = gsap.timeline()

    tl.fromTo(".box_t_name .t_name",{
        opacity:0,
        duration:1,
        y: 140,
        x:10,
        stagger:.03,
    },{
        delay:.35,
        stagger:.07,
        opacity:1,
        duration:1,
        ease: Power4.easeOut,
        y:0,
        x:0,
    })

    tl.to(".t_name",{
        opacity:0,
        delay:.5,
        duration:1,
        stagger:.08,
    })


    tl.to(".container_t_name",{
        opacity:0,
        duration:.8,
        stagger:.03,
    })

    tl.to(".container_t_name",{
        display:"none"
    })

    },[])


  return (
    <div className="container_t_name select-none w-full h-screen bg-black fixed top-0 flex-col left-0 !z-[999999990] flex justify-center items-center">
        <div className="box_t_name flex flex-row justify-center items-center overflow-hidden h-[4rem] px-2 pt-1">
            <span className='t_name text-white text-[4rem] opacity-0'>L</span>
            <span className='t_name text-white text-[4rem] opacity-0'>I</span>
            <span className='t_name text-white text-[4rem] opacity-0'>V</span>
            <span className='t_name text-white text-[4rem] opacity-0'>I</span>
            <span className='t_name text-white text-[4rem] opacity-0'>N</span>
            <span className='t_name text-white text-[4rem] opacity-0'>G</span>
            <span className='t_name text-white text-[4rem] opacity-0'> </span>
            <span className='t_name text-white text-[4rem] opacity-0 ml-3'>S</span>
            <span className='t_name text-white text-[4rem] opacity-0 '>T</span>
            <span className='t_name text-white text-[4rem] opacity-0 '>E</span>
            <span className='t_name text-white text-[4rem] opacity-0 '>R</span>
            <span className='t_name text-white text-[4rem] opacity-0 '>E</span>
            <span className='t_name text-white text-[4rem] opacity-0 '>O</span>
        </div>
        
    </div>
  )
}

export default Preload