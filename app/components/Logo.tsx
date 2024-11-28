import React from 'react'
import Moon from './Moon'
import localFont from 'next/font/local'
import {motion} from 'framer-motion'
const font = localFont({src:'../fonts/fonnts.com-Ainslie_Sans_Norm_Demi.otf'})

function Logo() {

  return (
    <motion.div  initial={{position:'absolute',top:'50%',left:'50%'}} transition={{duration:0.9,delay:0.5,ease:'easeInOut',stiffness:0.4}} animate={{top:'5%',left:'6%'}} className='flex items-center'>
        <Moon/>
        <p className={`text-white tracking-tight text-[1.2rem] font-[900] ${font.className}`}>USPACE</p>
      </motion.div>
  )
}

export default Logo
