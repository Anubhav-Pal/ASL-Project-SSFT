import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section className='footer-section bg-primary text-white flex flex-col  gap-10 pt-20 '>
      <div className='container flex flex-col gap-10 lg:gap-0 text-center md:text-left md:px-5 lg:px-0 lg:text-left md:flex-row md:items-start lg:flex-row items-center lg:items-start justify-between '>
        <div>
          <div className='text-4xl lg:text-3xl font-semibold mb-2'>ASLife.</div>
          <div>Transform ideas into ASL effortlessly</div>
        </div>
        <div className='flex flex-col justify-start md:items-start'>
          <div className='text-xl font-medium mb-2 lg:mb-4'>Useful Links</div>
          <div className='flex flex-col gap-1 md:items-start'>
            <Link className='text-white text-md' to='/'>Home</Link>
            <Link className='text-white text-md' to='/texttovideo'>Text To Video</Link>
            <Link className='text-white text-md' to='/videototext'>Video To Text</Link>
            <Link className='text-white text-md' to='/livevideototext'>Live Video Captioning</Link>
            <Link className='text-white text-md' to='/emergency'>Emergency Call</Link>
          </div>
        </div>

      </div>

      <div>
        <hr className='opacity-10' />
        <div className="subFooter container flex flex-col lg:flex-row md:flex-row items-center justify-center gap-3 md:gap-10 lg:gap-10 text-sm font-medium my-5">
          <div>
            Made with ❤ by Team Tridev
          </div>
          <div className="copyright flex flex-row items-center gap-1">
            <div>{year} ASLife. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer 