import React from 'react'
import "../style.css"
import FeatureCard from "../components/FeatureCard"
import {HiBadgeCheck} from "react-icons/hi"
const Landingpage = () => {
  return (
    <div>

{/* HEAD SECTION */}
      <div className="land-frontpage">
        <div className="landfrontIn p-20">
        <div className='flex justify-between m-8 h-1/5'>
          <div className='text-2xl'>text to video</div>
          <div className='text-2xl'>text to video</div>
        </div>
        <div className='flex flex-col items-center text-8xl text-center h-3/5'>Transform text into ASL <div className='my-12'>effortlessly.</div></div>
        <div className='flex justify-between m-8 h-1/5'>
          <div className='text-2xl'>text to video</div>
          <div className='text-2xl'>text to video</div>
        </div>
      </div>
      </div>


{/* ASL INFORMATION */}
      <div className=" bg-gray-800 h-fit text-2xl text-white p-16 px-28">
    <div className='text-6xl text-center my-4'>ASL Information</div>
    <div className='my-6'>ASL stands for American Sign Language. It is a natural language used primarily by deaf and hard-of-hearing individuals in the United States and parts of Canada. </div>
      <div className='my-8'>
      <div>Some key points about ASL:</div>
      <div className='flex justify-around'>
        <ul>
       <li className='flex '><HiBadgeCheck className='mx-2'/>Visual-Gestural Language</li>
        <li className='flex ' ><HiBadgeCheck className='mx-2'/>Independent Language</li>
        <li className='flex '><HiBadgeCheck className='mx-2'/>Vocabulary and Gramma</li>
        <li className='flex '><HiBadgeCheck className='mx-2'/>Regional Variations</li>
        </ul>
       <ul>
       <li className='flex '><HiBadgeCheck className='mx-2'/>Cultural Aspects</li>
        <li className='flex '><HiBadgeCheck className='mx-2'/>Accessibility and Interpreting</li>
        <li className='flex '><HiBadgeCheck className='mx-2'/>Education and Research</li>
       </ul>
      </div>
      </div>
      <div>ASL is an expressive and vibrant language that allows deaf and hard-of-hearing individuals to communicate effectively and participate fully in society.</div>
    </div>

{/* FEATURES */}
<div className='bg-cyan-500 h-fit text-2xl  p-16 px-28'>
<div className='text-6xl text-center my-4'>Features</div>
  <FeatureCard
   text="Uploading a video to obtain text in American Sign Language (ASL) is not possible, as ASL is a visual-gestural language. ASL relies on handshapes, facial expressions, and body movements. However, you can use video analysis technology to detect signs and generate captions or descriptions in written form for ASL videos."
   cardTxt="Upload video to get text"/>

<FeatureCard
   text="Uploading a video to obtain text in American Sign Language (ASL) is not possible, as ASL is a visual-gestural language. ASL relies on handshapes, facial expressions, and body movements. However, you can use video analysis technology to detect signs and generate captions or descriptions in written form for ASL videos."
   cardTxt="Upload video to get text"/>

<FeatureCard
   text="Uploading a video to obtain text in American Sign Language (ASL) is not possible, as ASL is a visual-gestural language. ASL relies on handshapes, facial expressions, and body movements. However, you can use video analysis technology to detect signs and generate captions or descriptions in written form for ASL videos."
   cardTxt="Upload video to get text"/>
</div>
    </div>
  )
}

export default Landingpage