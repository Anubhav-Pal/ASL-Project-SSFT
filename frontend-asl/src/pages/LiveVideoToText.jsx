import React from 'react'
import { Navbar, Header } from '../components/index'

const LiveVideoToText = () => (
  <section>
    <Navbar/>
    <Header heading="Live Video Translation" desc="Convert a live video of a person using ASL into text version. This is a great way to follow a conversation in sign language or to provide real-time translation for people who are deaf or hard of hearing."/>
    <div className="container">
      <div className='text-[#434343] my-5 font-medium opacity-80'>Open camera (Supports mobile devices only):</div>
    </div>

  </section>
  )


export default LiveVideoToText