import React from 'react'
import { pcGroup } from '../assets/index.js'

const BackgroundSection = () => {
  return (
    <section className='background absolute -z-50 bg-primry py-40 top-0 w-full '>
      <div className='flex flex-col items-center justify-center container'>
        <div className="overflow-hidden background-heading text-md lg:text-2xl font-semibold text-[#434343] text-center  leading-snug ">
         Powered by Cutting Edge Technology
          <br />
          <span className='text-2xl md:text-4xl lg:text-5xl font-bold gradient-primary pb-10 uppercase'>
          LSTM Machine Learning
          </span>
        </div>
        <div className="oveflow-hidden background-image ">
          <img src={pcGroup} className='w-[900px]' alt="" />
        </div>
      </div>
    </section>

  )
}

export default BackgroundSection