import React from 'react'

const FeatureCard = (props) => (
  <div className="featureCard flex">
    <div className="featureCard-content">
      <h3 className='featureCard-title'>{props.title}</h3>
      <p className='featureCard-desc'>{props.desc}</p>
      <a className="featureCard-button" href={props.path}>{props.link}</a>
    </div>
    <div className="featureCard-image">
      <img src={props.image} alt="image" />
    </div>
  </div>
)

export default FeatureCard
