import React from 'react'
import { Navbar, Header } from '../components/index'

const VideoToText = () => (
  <section>
    <Navbar />
    <Header heading="Convert Video to Text" desc="Convert a video (without subtitles) into text. This is a great way to access information that is not available in a sign language format. You can also use this feature to transcribe videos for people who are deaf or hard of hearing." />

    <div className="container">
      <div className='text-[#434343] my-5 font-medium opacity-80'>Upload the video below:</div>
    </div>

    <div className="container">
      <form
        className='flex flex-col flex-start gap-5'
        action="">
        {/* <textarea name="" id="" cols="30" rows="10" className='rounded-md border-2 border-[#434343] opacity-80 p-2 placeholder:text-[#434343] placeholder:opacity-80 ' placeholder='Enter the message'></textarea> */}
        <button type="submit" className='bg-primary text-white px-2 py-2 font-normal w-[8rem] rounded-md mb-5 nav-box transition-all ease-in-out duration-200 hover:bg-[#1e78b9]'>Convert</button>
      </form>
    </div>

  </section>
)


export default VideoToText