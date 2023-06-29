import React from 'react'
import FeatureCard from "../components/FeatureCard"
import { featureInfo } from '../utils/constants'

const Features = () => (
  <div className=' bg-primary py-36'>
    <div className='text-5xl mb-10 text-center text-white font-semibold capitalize'>Dive into our services</div>

    <div className='container bg-featureprimary flex flex-col jus gap-20'>
      {featureInfo.map((feature) => (
        <FeatureCard key={feature.index} index={feature.index} title={feature.title} desc={feature.desc} link={feature.link} path={feature.path} image={feature.image} />
      ))}
    </div>
  </div>
)

export default Features