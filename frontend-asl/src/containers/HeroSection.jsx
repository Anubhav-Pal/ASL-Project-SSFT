import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="hero_section text-white h-screen flex items-center justify-center">
      <div className="container hero_section-content flex flex-col w-screen py-10 px-28 text-2xl ">
        <div className="nav-links-one  flex items-center justify-between h-1/5">
          <Link className='text-white text-lg Link-animate' to='/texttovideo'>Text To Video</Link>
          <Link className='text-white text-lg Link-animate' to='/videototext'>Video To Text</Link>
        </div>

        <div className="z-20 nav-headLine flex flex-col items-center justify-center text-center h-3/5 text-8xl font-bold">
          Transform ideas into <span className="gradient-primary inline">ASL</span>effortlessly
        </div>

        <div className="nav-links-two flex items-center justify-between h-1/5 ">
          <Link className='text-white text-lg Link-animate' to='/livevideototext'>Live Video Captioning</Link>
          <Link className='text-white text-lg Link-animate' to='/emergency'>Emergency Call</Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;