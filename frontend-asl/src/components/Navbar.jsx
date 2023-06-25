import React from 'react'
import { Grid } from '../assets/index.js'

const Navbar = () => (
  <section className='navbar'>
    <div className="navbar-content container h-16 flex flex-row items-center justify-between">
      <div>ASLife.</div>
      <div className='flex flex-row gap-10 '>
        <div>Home</div>
        <div className='nav-icon-container flex items-center justify-center'>
          <img className='nav-icon' src={Grid} alt="" />
        </div>
      </div>
    </div>

  </section>
)

export default Navbar