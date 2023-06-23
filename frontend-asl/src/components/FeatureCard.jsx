import React from 'react'
import { Link } from 'react-router-dom'

const FeatureCard = (props) => (
  <div className="featureCard flex">
    <div className="featureCard-content">
      <h3 className='featureCard-title'>{props.title}</h3>
      <p className='featureCard-desc'>{props.desc}</p>
      <Link className="featureCard-button" to={props.path}>{props.link}</Link>
    </div>
    <div className="featureCard-image">
      <img src={props.image} alt="image" />
    </div>
  </div>
)

export default FeatureCard
