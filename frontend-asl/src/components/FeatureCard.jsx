import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const FeatureCard = (props) => (
  <motion.div
    className="featureCard flex flex-col lg:flex-row even:gap-52 lg:even:gap-0 md:even:gap-40 md:flex-row lg:even:flex-row-reverse p-10  lg:justify-between gap-40 lg:gap-10  lg:p-20 text-white"
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.6 }}
  >
    <div className="featureCard-content relative flex flex-col w-3/4  lg:w-1/2">
      <div className=' text-7xl lg:text-9xl font-bold opacity-10'>{props.index}</div>
      <div className='absolute top-6 left-5  lg:top-16 lg:left-10 flex flex-col w-[300px] lg:w-full'>
        <h3 className='featureCard-title z-50 font-semibold text-2xl lg:text-5xl leading-loose mb-2'>{props.title}</h3>
        <p className='p-text featureCard-desc lg:w-3/4'>{props.desc}</p>

        <Link className="bg-primary text-white text-center nav-box px-2 py-2 font-normal w-[8rem] rounded-md mb-5 transition-all ease-in-out duration-200 hover:bg-[#1e78b9] mt-5 lg:mt-10" to={props.path}>{props.link}</Link>
      </div>
    </div>
    <div className="featureCard-image mt-10 lg:w-1/2">
      <img src={props.image} className='w-[900px] mt-5 object-cover' alt="image" />
    </div>
  </motion.div >
)

export default FeatureCard
