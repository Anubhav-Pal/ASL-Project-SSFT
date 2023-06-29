import React from 'react'
import FeatureCard from "../components/FeatureCard"
import { featureInfo } from '../utils/constants'

const Features = () => (
  <div className=' bg-primary pt-10 lg:p-20 lg:pt-10'>
    <div className='text-3xl lg:text-5xl mb-5 lg:mb-10 text-center text-white font-semibold capitalize'>Dive into our services</div>

    <div className='container bg-featureprimary flex flex-col last:pb-5 lg:last:pb-16 md:last:pb-16 '>
      {featureInfo.map((feature) => (
        <FeatureCard key={feature.index} index={feature.index} title={feature.title} desc={feature.desc} link={feature.link} path={feature.path} image={feature.image} />
      ))}
    </div>
  </div>
)

export default Features