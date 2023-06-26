import React from 'react'
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='bg-primary text-white'>
      <div className='flex text-white py-20 px-40  justify-between'>

        <div>
          <div className='text-4xl font-semibold mb-12'>ASLife.</div>
          <div >A new way to make the payments </div>
          <div>easy,reliable and secure.</div>
        </div>
        <div className='usefullinks'>
          <div className='text-xl font-large mb-8 font-semibold'>Useful Links</div>
          <ul>
            <li>Content</li>
            <li>How it Works</li>
            <li>Create</li>
            <li>Explore</li>
            <li>terms & Services</li>
          </ul>
        </div>

        <div className='community '>
          <div className='text-xl font-large mb-8 font-semibold'>Community</div>
          <ul>
            <li>Help Center</li>
            <li>Partners</li>
            <li>Suggestions</li>
            <li>Blog</li>
            <li>Newsletters</li>
          </ul>
        </div>

        <div className='partner'>
          <div className='text-xl font-large mb-8 font-semibold'>Partner</div>
          <ul>
            <li>Our Partners</li>
            <li>Become a Partner</li>
          </ul>
        </div>
      </div>

      <div className="line text-white font-semibold mx-32 border-offwhite rounded-sm border-2"></div>
      <div className="footer flex justify-between h-12 items-center mx-40">

        <div className="copyright flex">
          <div>Copyright</div>
          <div className='mt-1 mx-2'> <AiOutlineCopyright /></div>
          <div>2023 ASLife. All Rights Reserved.</div>
        </div>

        <div className="social flex w-40 text-2xl justify-between">
          <div className="insta">
            <BsInstagram />
          </div>
          <div className="fb">
            <BsFacebook />
          </div>
          <div className="twitter">
            <BsTwitter />
          </div>
          <div className="linkedin">
            <BsLinkedin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer