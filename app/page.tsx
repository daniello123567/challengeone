"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {Inter} from 'next/font/google'
import './globals.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import {EffectFade,Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import Image from 'next/image'
import Logo from './components/Logo'
import Links from './components/Links'
import Hero from './components/Hero'
const inter = Inter({weight:"variable",subsets:['latin']})
function Page() {
  const images = ['astron.jpg','astronaut2.jpg','astro.jpg']
  const headerVariants = {
    init:{
      opacity:0,
      y:30
    },
    anim:{
      opacity:1,
      y:0,
      transition:{
        duration:0.5,
        delay:1,
        ease:'easeIn'
      }
    }
  }
  const headerVariants2 = {
    init:{
      opacity:0,
      y:10
    },
    anim:{
      opacity:1,
      y:0,
      transition:{
        delay:1.3,
        duration:0.6,
      }
    }
  }
  const [currentSlide,setcurrentslide] = useState<number>(0)
  return (
    <motion.div  className='w-full h-screen '>
      <Swiper
      modules={[EffectFade,Autoplay]}
      onSlideChange={(swiperInstance) => {
       setcurrentslide(swiperInstance.activeIndex);
      }}
      effect='fade'
      slidesPerView={1}
      autoplay={{
        delay:currentSlide!==0?8000:900,
        disableOnInteraction:false
      }}

      speed={800}

      loop={true}
          className='h-screen relative w-full'
      >
   {images.map((image:string)=>{
    return <SwiperSlide  key={image}>
    <div className='bg-blue-600 w-full h-full'>
      <Image className='w-full h-full object-cover' src={`/${image}`} width={2000} alt='back' height={2000}/>
    </div>
   </SwiperSlide>
  })}
  <div className='w-full lg:pl-[5.1875em] px-[1em] pt-[1em] absolute top-0 z-[999] h-full'>
    <motion.div className={`${inter.className} justify-between w-full h-[3em]  flex items-center`}>
      <div></div>
      <Logo/>
      <Links/>
      <motion.button variants={headerVariants2} initial="init" animate="anim" className='bg-white py-[0.4375em] px-[0.765625em]  rounded-full text-[0.875em] '>Get Started</motion.button>
    </motion.div>
    <motion.div variants={headerVariants} initial="init" animate="anim" className={`${inter.className} mt-[5em]`}>
      <Hero/>
    </motion.div>
  </div>
      </Swiper>
    </motion.div>
  )
}

export default Page
