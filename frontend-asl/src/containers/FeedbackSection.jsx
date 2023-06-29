import React from 'react'
import { Link } from 'react-router-dom'

const FeedbackSection = () => (
  <section className='bg-primary text-white p-20'>
    <div className="container rounded-lg p-10">
      <div className='feedback-main-content  py-10 px-10 flex items-center justify-around bg-black'>
        <div className="feedback-headers w-3/4 ">
          <div className='text-3xl font-semibold'>Help Us Serve You Better</div>
          <div className='p-text w-3/4 mt-3'>We greatly value your feedback! It plays a vital role in our ongoing efforts to enhance our services. Whether you have suggestions, compliments, or areas where we can improve, we want to hear from you.</div>
        </div>
        <div className='feedback-CTA '>
          <Link className="bg-primary text-white text-center nav-box px-5 py-3 rounded-md" to='/feedback'>Share Feedback</Link>
        </div>
      </div>
    </div>
  </section>

)

export default FeedbackSection
