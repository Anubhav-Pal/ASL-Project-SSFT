import React from 'react'
import { Link } from 'react-router-dom'

const FeatureCard = (props) => (
  <div className="featureCard flex p-24 text-white">
    <div className="featureCard-content flex flex-col w-3/4">
      <h3 className='featureCard-title z-50 font-bold text-6xl mb-8'>{props.title}</h3>
      <p className='featureCard-desc w-3/4 mb-4'>{props.desc}</p>
      
      <Link className="featureCard-button text-white" to={props.path}>{props.link}</Link>
    </div>
    <div className="featureCard-image">
      <img src={props.image} alt="image" />
    </div>
  </div>
)

export default FeatureCard
