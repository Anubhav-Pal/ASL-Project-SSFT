import React from 'react'
import { Link } from 'react-router-dom'

const FeatureCard = (props) => (
  <div className="featureCard flex px-20 py-24  text-white static">
    <div className="featureCard-content relative flex flex-col w-3/4">
      <div className='text-9xl font-bold opacity-10'>{props.index}</div>
      <div className='absolute top-10 left-10 flex flex-col'>
        <h3 className='featureCard-title z-50 font-semibold text-5xl leading-loose mb-2'>{props.title}</h3>
        <p className='p-text featureCard-desc w-3/4'>{props.desc}</p>

        <Link className="bg-primary text-white text-center nav-box px-2 py-2 font-normal w-[8rem] rounded-md mb-5 transition-all ease-in-out duration-200 hover:bg-[#1e78b9] mt-5" to={props.path}>{props.link}</Link>
      </div>
    </div>
    <div className="featureCard-image">
      <img src={props.image} alt="image" />
    </div>
  </div>
)

export default FeatureCard
