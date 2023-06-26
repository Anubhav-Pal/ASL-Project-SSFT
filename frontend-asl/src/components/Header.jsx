import React from 'react'

const Header = (props) =>  (
  <div className="header bg-primary">
    <div className="container text-white flex flex-col items-center justify-center gap-3">
      <div className="header-heading text-3xl font-semibold pt-20">{props.heading}</div>
      <div className="header-desc pb-20 text-center w-5/6">{props.desc}</div>
      
    </div>
  </div>
  )


export default Header