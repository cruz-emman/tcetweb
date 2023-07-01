import React from 'react'
import {headerSVG} from '../assets'
import { motion } from 'framer-motion'
import { fadeIn, navbarAnimation, slideIn } from '../motion'
const Header = () => {
  return (
    <motion.div 
      variants={navbarAnimation}
      initial="hidden"
      whileInView="show"
      className="w-full px-4 sm:mx-16 mx-auto sm:mt-0 mt-5 h-[calc(100vh-80px)] items-center justify-center flex sm:flex-row flex-col-reverse pb-40 ">
     
     
      <div className='flex flex-col sm:w-full justify-center gap-5  whitespace-normal 
      sm:h-[800px] sm:items-center  sm:px-4 sm:-mt-16 '>
        <h5 className='text-3xl sm:text-7xl font-semibold text-left'>Lorem ipsum dolor,  <span className='font-bold text-green-700'>Ease</span> elit. Nesciunt, fugit?</h5>
        <p className='text-lg font-semibold text-left text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ullam.</p>
      </div>


      <div className='sm:flex flex-col sm:w-full  justify-center whitespace-normal sm:h-full sm:items-center   '>
          <div className='flex items-center justify-center sm:h-[600px] sm:w-[400px] h-[300px] w-[300px] '>
            <motion.img 
              variants={fadeIn('right', 'tween', 0.2, 1)}
              className='w-full h-full object-contain drop-shadow-xl' src={headerSVG} />
          </div>
      </div>
    </motion.div>
  )
}

export default Header