import React from 'react'

const FeatureCard = (props) => {
  return (
    <div className='flex justify-between my-16'>
      <div className='w-3/5'>
        {props.text}
      </div>
      <div className='bg-gray-800 text-white w-1/5 flex justify-center items-center'>
        {props.cardTxt}
      </div>
    </div>
  )
}

export default FeatureCard
