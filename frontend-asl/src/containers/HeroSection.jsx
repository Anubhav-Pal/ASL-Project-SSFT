import React from 'react'

const HeroSection = () => {
  return (
    <section className="hero_section text-white h-screen flex items-center justify-center">
      <div className="hero_section-content flex flex-col w-screen py-10 px-28 text-2xl ">
        <div className="nav-links-one flex items-center justify-between h-1/5">
          <div>Text To Video</div>
          <div>Video To Text</div>
        </div>
        <div className="nav-headLine flex items-center justify-center text-center h-3/5">Transform text into<br/>ASL effortlessly</div>
        <div className="nav-links-two flex items-center justify-between h-1/5 ">
          <div>Live Video Captioning</div>
          <div>Emergency Call</div>
          </div>
      </div>
    </section>
  )
}

export default HeroSection