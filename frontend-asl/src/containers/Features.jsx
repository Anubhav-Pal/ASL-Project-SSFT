import React from 'react'
import FeatureCard from "../components/FeatureCard"
import { featureInfo } from '../utils/constants'

const Features = () => (
  <div className='bg-primary'>
    <div className='container'>
      {featureInfo.map((feature) => (
        <FeatureCard title={feature.title} desc={feature.desc} />
      ))}
    </div>
  </div>
)

export default Features