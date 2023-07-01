import React, {useEffect, useState} from 'react'
import {tcet1, tcet2,  tcet3} from  '../assets'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
import {RxDotFilled} from 'react-icons/rx'
import { motion } from 'framer-motion'
import { container, fadeIn, navbarAnimation, slideIn, staggerContainer } from '../motion'
const About = () => {
  const slides = [
    {
      id: 1,
      img: tcet1
    },
    {
      id: 2,
      img: tcet2
    },
    {
      id:3,
      img: tcet3
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () =>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () =>{
    const lastSlide = currentIndex === slides.length - 1;
    const newLastSlide = lastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newLastSlide)
  }


  const goToSlide = (slideIndex) =>{
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='flex flex-col w-full h-full relative sm:px-40 sm:py-40 '>
      <div className='gradient-02 inset-0 absolute -z-10' />
      <motion.div variants={fadeIn('left','tween', 0.3, 1)} className='flex items-center justify-center flex-col px-12 py-4  gap-2'>
        <h1
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className='text-2xl text-slate-700 text-center font-semibold leading-2 sm:text-4xl'
        >
          What Do You Know About{' '}
          <span className='font-bold'>Trinitian Center For Education and Technology?</span>
        </h1>
          <p className='text-center font-semilight text-gray-600 sm:text-2xl'>Get the full picture Lorem ipsum dolor sit amet.</p>
      </motion.div>
      <motion.div 
        variants={navbarAnimation}
        initial="hidden"
        whileInView="show"
        className='w-full sm:px-16 mt-24  flex flex-col sm:flex-row-reverse items-center justify-center mx-auto gap-10'>

      <div className='h-[200px] p-4 sm:h-96 mx-auto  w-full sm:flex-[1] relative group'>
        <div className='absolute bg-green-400 w-full h-[calc(100%-20px)] mt-2 ml-2 -z-10' />
          <div style={{backgroundImage: `url(${slides[currentIndex].img})`}} className='w-full h-full bg-center bg-cover  duration-500 z-20 '>
          </div>


        {/* Left */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
            <AiFillCaretLeft onClick={prevSlide} size={30} />
          </div>
        {/* Right */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
            <AiFillCaretRight onClick={nextSlide} size={30} />
          </div>

          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div key={slide.id} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                <RxDotFilled />
              </div>
            ))}
          </div>
      </div>  

      <motion.div variants={fadeIn('left','tween', 0.3, 1)} className='flex flex-col py-2 px-4 mt-10 gap-5 sm:flex-[1] sm:ml-4'>
        <p className='font-light text-gray-500 sm:text-2xl '> <span className='font-bold text-black'>Trinitian Center For Education and Techonology (TCET) </span> was founded Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque aliquid iste ab quia. Error minus ducimus aperiam. Quae itaque eum nihil pariatur, veniam blanditiis molestiae fugit reprehenderit obcaecati aspernatur laboriosam. </p>
      </motion.div>
    </motion.div>
    </div>
  )
}

export default About