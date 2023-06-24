import React from 'react'
import { Link } from 'react-router-dom'

const FeatureCard = (props) => (
  <div className="featureCard flex p-24 ">
    <div className="featureCard-content flex flex-col w-3/4">
      <h3 className='featureCard-title font-bold'>{props.title}</h3>
      <p className='featureCard-desc w-3/4'>{props.desc}</p>
      <Link className="featureCard-button" to={props.path}>{props.link}</Link>
    </div>
    <div className="featureCard-image">
      <img src={props.image} alt="image" />
    </div>
  </div>
)

export default FeatureCard
