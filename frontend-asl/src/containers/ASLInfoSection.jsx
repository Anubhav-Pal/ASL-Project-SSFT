import React from 'react'
import { HiBadgeCheck } from "react-icons/hi"

const ASLInfoSection = () => {
  return (
    <div>
    <div className=" bg-black h-fit text-2xl text-white p-16 px-28">
      <div className='text-6xl text-center my-4'>ASL Information</div>
      <div className='my-6'>ASL stands for American Sign Language. It is a natural language used primarily by deaf and hard-of-hearing individuals in the United States and parts of Canada. </div>
      <div className='my-8'>
        <div>Some key points about ASL:</div>
        <div className='flex justify-around'>
          <ul>
            <li className='flex '><HiBadgeCheck className='mx-2' />Visual-Gestural Language</li>
            <li className='flex ' ><HiBadgeCheck className='mx-2' />Independent Language</li>
            <li className='flex '><HiBadgeCheck className='mx-2' />Vocabulary and Gramma</li>
            <li className='flex '><HiBadgeCheck className='mx-2' />Regional Variations</li>
          </ul>
          <ul>
            <li className='flex '><HiBadgeCheck className='mx-2' />Cultural Aspects</li>
            <li className='flex '><HiBadgeCheck className='mx-2' />Accessibility and Interpreting</li>
            <li className='flex '><HiBadgeCheck className='mx-2' />Education and Research</li>
          </ul>
        </div>
      </div>
      <div>ASL is an expressive and vibrant language that allows deaf and hard-of-hearing individuals to communicate effectively and participate fully in society.</div>
    </div>

    </div>
  )
}

export default ASLInfoSection