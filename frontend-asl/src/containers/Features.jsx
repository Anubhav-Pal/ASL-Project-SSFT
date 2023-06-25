import React from 'react'
import FeatureCard from "../components/FeatureCard"
import { featureInfo } from '../utils/constants'

const Features = () => (
  <div className='bg-primary py-36'>
    <div className='container bg-featureprimary flex flex-col gap-20'>
      {featureInfo.map((feature) => (
        <FeatureCard title={feature.title} desc={feature.desc} link={feature.link} path={feature.path} image={feature.image} />
      ))}
    </div>
  </div>
)

export default Features