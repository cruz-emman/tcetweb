import React from 'react'
import { motion } from 'framer-motion'
import {platinum} from '../assets'
const Events = () => {
  return (
    <div className='px-4 sm:px-40 sm:py-40 py-10 mt-10 h-full '>
        <div className='flex flex-col items-center justify-center w-full gap-10'>
            <p className='text-2xl text-slate-800 font-semibold'>Events</p>

            {/* Events Image + Description */}
            <div className='flex flex-col sm:flex-row-reverse items-center justify-center sm:justify-between gap-10 relative'>
              <div className='absolute gradient-02 inset-0 -z-10' />

                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.1
                  }}
                  className='flex flex-col sm:flex-[1] justify-center gap-10 z-10 text-center'
                >
                    <h2 className=' sm:text-4xl font-bold '>Platinum <span className='text-green-500   rounded-lg font-bold bg-color-200 h-full w-full'> Award</span> </h2>
                    <p className='font-light sm:text-2xl sm:text-right'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ad libero eius totam omnis obcaecati amet dolores quod cumque eveniet recusandae, eos dolore nostrum corrupti.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.1
                    }}

                    className='w-[250px] h-[250px] sm:flex-[1] '
                >
                   <img src={platinum} className='w-full h-full object-contain' />
                </motion.div>

            </div>

            <div className='flex flex-col sm:flex-row items-center w-full  justify-center sm:justify-center gap-10 relative'>
            <div className='absolute gradient-02 right-0 -z-10' />

                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.1
                  }}
                  className='flex flex-col sm:flex-[1] justify-center items-center sm:justify-between  gap-10'
                >
                    <h2 className=' sm:text-4xl font-bold text-c '>Platinum <span className='text-green-500   rounded-lg font-bold bg-color-200 h-full w-full'> Award</span> </h2>
                    <p className='font-light sm:text-2xl text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ad libero eius totam omnis obcaecati amet dolores quod cumque eveniet recusandae, eos dolore nostrum corrupti.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.1
                    }}
                    
                    className='w-[250px] h-[250px] sm:flex-[1]'
                >
                  
                   <img src={platinum} className='w-full h-full object-contain' />
                   
                </motion.div>

            </div>



            
        </div>
    </div>
  )
}

export default Events