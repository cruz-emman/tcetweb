import React from 'react'
import logo from '../assets/tcet_logo.png'
import { motion } from 'framer-motion'
import { navbarAnimation } from '../motion'
const Navbar = () => {
  return ( 
    
      <motion.div 
        variants={navbarAnimation}
        initial='hidden'
        whileInView={"show"}
        className='relative mt-10 h-[70px] flex items-center justify-center  '>
          <div className='absolute gradient-01 inset-0' />
          <img src={logo} className="w-[80px] h-[80px] object-contain"/>
      </motion.div>
  )
}

export default Navbar 