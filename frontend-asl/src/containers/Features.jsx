import React from 'react'
import FeatureCard from "../components/FeatureCard"

const Features = () => {
  return (
    <div>
      <div className='bg-cyan-500 h-fit text-2xl  p-16 px-28'>
        <div className='text-6xl text-center my-4'>Features</div>
        <FeatureCard
          text="Uploading a video to obtain text in American Sign Language (ASL) is not possible, as ASL is a visual-gestural language. ASL relies on handshapes, facial expressions, and body movements. However, you can use video analysis technology to detect signs and generate captions or descriptions in written form for ASL videos."
          cardTxt="Upload video to get text" />

        <FeatureCard
          text="Uploading a video to obtain text in American Sign Language (ASL) is not possible, as ASL is a visual-gestural language. ASL relies on handshapes, facial expressions, and body movements. However, you can use video analysis technology to detect signs and generate captions or descriptions in written form for ASL videos."
          cardTxt="Upload video to get text" />

        <FeatureCard
          text="Uploading a video to obtain text in American Sign Language (ASL) is not possible, as ASL is a visual-gestural language. ASL relies on handshapes, facial expressions, and body movements. However, you can use video analysis technology to detect signs and generate captions or descriptions in written form for ASL videos."
          cardTxt="Upload video to get text" />
      </div>
    </div>
  )
}

export default Features