import { useState, React } from 'react'
import { Grid } from '../assets/index.js'
import { featureInfo } from '../utils/constants.js'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
  <section className='navbar'>
    <div className="navbar-content container h-16 flex flex-row items-center justify-between">
        <Link className='nav-link text-xl font-medium opacity-80' to='/'>ASLife.</Link>
      <div className='flex flex-row gap-5 items-center justify-center '>
        <Link className='nav-link' to='/'>Home</Link>
        <div
          className="flex flex-1 justify-end items-center p-4"
          onMouseLeave={() => setToggle(false)}
          >

          <img
            src={Grid}
            alt="menu"
            className=' w-[20px] h-[20px] object-contain opacity-80 hover:opacity-100 cursor-pointer' 
            onMouseEnter={() => setToggle(true)}
            />
          <div className={`${toggle ? 'flex' : 'hidden'} nav-box absolute top-14 bg-white rounded-md z-20 flex-col items-start justify-center`}>
            {featureInfo.map((feature) => (
              <Link className='text-[#434343] opacity-80 text-sm hover:text-white hover:bg-primary w-full p-2 transition-all duration-200 ease-in-out even:rounded-none odd:rounded-t-md' to={feature.path}>
                {feature.title}
              </Link>


            ))}
          </div>

        </div>
      </div>
    </div>

  </section>)
}

export default Navbar