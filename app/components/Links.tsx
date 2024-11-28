import React from 'react'
import {motion} from 'framer-motion'
function Links() {
  const Variants = {
    init:{
      opacity:0,
      y:10
    },
    anim:{
      opacity:1,
      y:0,
      transition:{
        duration:0.6,
        delay:1.3
      }
    }
  }
  return (
    <motion.div variants={Variants} initial="init" animate="anim" className='text-white hidden text-[0.8765em] tracking-tighter md:flex items-center gap-[1.5625em]'>
      <p>About</p>
      <p>Products</p>
      <p>Works</p>
      <p>Contact</p>
    </motion.div>
  )
}

export default Links
