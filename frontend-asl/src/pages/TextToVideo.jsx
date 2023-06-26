import React from 'react'
import { Navbar, Header } from '../components/index'

const TextToVideo = () => (
  <section className=''>
    <Navbar />
    <Header heading="Convert Text into ASL video" desc="Easily convert text into a series of images or a video with hand signs depicting the input text. This is a great way to learn ASL or to communicate with someone who uses sign language." />

    <div className="container">
      <div className='text-[#434343] my-5 font-medium opacity-80'>Type/Paste the text in the prompt area below:</div>
    </div>

    <div className="container">
      <form 
      className='flex flex-col flex-start gap-5'
      action="">
        <textarea name="" id="" cols="30" rows="10" className='rounded-md border-2 border-[#434343] opacity-80 p-2 placeholder:text-[#434343] placeholder:opacity-80 ' placeholder='Enter the message'></textarea>
        <button type="submit" className='bg-primary text-white px-2 py-2 font-normal w-[8rem] rounded-md mb-5 nav-box transition-all ease-in-out duration-200 hover:bg-[#1e78b9]'>Convert</button>
      </form>
    </div>

    

  </section>
) 


export default TextToVideo