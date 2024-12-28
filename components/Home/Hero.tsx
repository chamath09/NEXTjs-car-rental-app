import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div>
          <h2 className='text-[40px] md:text-[60px] font-bold'>Premium Car Rental in Your Area</h2>
          <h2 className='text-[20px] md:text-[25px] text-gray-500 md:mt-4'>Book the selected car effortlessly, Pay for driving only, 
            Book the Car Now</h2>
          <button className='p-2 mt-5 bg-blue-500 rounded-full text-white flex px-3 items-center hover:scale-105 transition-all '>Explore Cars</button>
        </div>
        <div>
          <Image src='/hero.png'
          alt='hero'
          width={350}
          height={300}
          className='w-full object-cover px-3'
          />
        </div>
    </div>
  )
}

export default Hero