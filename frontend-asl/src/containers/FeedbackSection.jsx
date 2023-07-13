import React from 'react'
import { Link } from 'react-router-dom'

const FeedbackSection = () => (
  <section className='bg-primary text-white pt-10 px-5 lg:pt-20'>
    <div className="container rounded-lg text-center lg:text-left  p-10">
      <div className='feedback-main-content p-5 lg:py-10 lg:px-10 flex flex-col lg:flex-row gap-10 lg:gap-0  items-center justify-around bg-black'>
        <div className="feedback-headers lg:w-3/4 flex flex-col items-center justify-center lg:items-start ">
          <div className='text-3xl font-semibold'>Help Us Serve You Better</div>
          <div className='p-text  lg:w-3/4 mt-3'>We greatly value your feedback! It plays a vital role in our ongoing efforts to enhance our services. Whether you have suggestions, compliments, or areas where we can improve, we want to hear from you.</div>
        </div>
        <div className='feedback-CTA w-full md:w-[250px] lg:w-[200px] px-5 py-3  text-white  rounded-md bg-primary nav-box text-center '>
          <Link className='text-white' to='/feedback'>Share Feedback</Link>
        </div>
      </div>
    </div>
  </section>

)

export default FeedbackSection
