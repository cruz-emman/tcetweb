import React from 'react'
import Slider from "react-slick";
import { img1,img2,img3 } from '../assets'

const Faculty = () => {
  const settings = {
    className: "focusCenter",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='md:h-full md:w-full bg-blue-50/75 px-4 justify-center md:px-40 py-20 md:flex flex-col '>
      <div className='flex items-center flex-col items-centers pb-10'>
        <h2 className='text-2xl md:text-2xl font-semibold text-center p-4'>Faculty <span className='text-green-50 bg-green-700 py-2 px-4 rounded-lg font-bold bg-color-200 h-full w-full'>Members</span></h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quidem?</p>
      </div>
      <Slider {...settings}>
        <div className='md:p-4 md:mx-10 '>
          <div className=' md:w-full p-4 md:h-full shadow-lg flex flex-col gap-4 items-center md:pt-20 border-2 border-slate-100 rounded-xl '>
            <img src={img1} className='h-16 w-16 md:w-[120px] md:h-[120px] rounded-full drop-shadow-xl' />
            <div className='flex flex-col gap-2 items-center md:px-10 md:leading-7 '>
                <h2 className='text-lg md:text-2xl font-normal' >Lorem, <span className='font-bold text-slate-500'>Ipsum</span></h2>
                <p className='text-md font-light text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque possimus suscipit velit hic, incidunt voluptate eos laudantium vitae ipsam rem?</p>
            </div>
          </div>
        </div>
        <div className='md:p-4 md:mx-10 '>
          <div className=' md:w-full p-4 md:h-full shadow-lg flex flex-col gap-4 items-center md:pt-20 border-2 border-slate-100 rounded-xl '>
            <img src={img1} className='h-16 w-16 md:w-[120px] md:h-[120px] rounded-full drop-shadow-xl' />
            <div className='flex flex-col gap-2 items-center md:px-10 md:leading-7 '>
                <h2 className='text-lg md:text-2xl font-normal' >Lorem, <span className='font-bold text-slate-500'>Ipsum</span></h2>
                <p className='text-md font-light text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque possimus suscipit velit hic, incidunt voluptate eos laudantium vitae ipsam rem?</p>
            </div>
          </div>
        </div>
        <div className='md:p-4 md:mx-10 '>
          <div className=' md:w-full p-4 md:h-full shadow-lg flex flex-col gap-4 items-center md:pt-20 border-2 border-slate-100 rounded-xl '>
            <img src={img1} className='h-16 w-16 md:w-[120px] md:h-[120px] rounded-full drop-shadow-xl' />
            <div className='flex flex-col gap-2 items-center md:px-10 md:leading-7 '>
                <h2 className='text-lg md:text-2xl font-normal' >Lorem, <span className='font-bold text-slate-500'>Ipsum</span></h2>
                <p className='text-md font-light text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque possimus suscipit velit hic, incidunt voluptate eos laudantium vitae ipsam rem?</p>
            </div>
          </div>
        </div>
        <div className='md:p-4 md:mx-10 '>
          <div className=' md:w-full p-4 md:h-full shadow-lg flex flex-col gap-4 items-center md:pt-20 border-2 border-slate-100 rounded-xl '>
            <img src={img1} className='h-16 w-16 md:w-[120px] md:h-[120px] rounded-full drop-shadow-xl' />
            <div className='flex flex-col gap-2 items-center md:px-10 md:leading-7 '>
                <h2 className='text-lg md:text-2xl font-normal' >Lorem, <span className='font-bold text-slate-500'>Ipsum</span></h2>
                <p className='text-md font-light text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque possimus suscipit velit hic, incidunt voluptate eos laudantium vitae ipsam rem?</p>
            </div>
          </div>
        </div>


      </Slider>
    </div>

  )
}

export default Faculty