import React from 'react'

const AppWrap = (Component) => function HOC() {
  return (
    <div className='Wrapper'>
      <div className='wrapper_lines flex flex-row items-center justify-evenly'>
        <div className="wrapper_line"></div>
        <div className="wrapper_line"></div>
        <div className="wrapper_line"></div>
        <div className="wrapper_line"></div>
        <div className="wrapper_line"></div>
        <div className="wrapper_line"></div>
        <div className="wrapper_line"></div>
        <div className="wrapper_line"></div>
      </div>
      <Component />
    </div>
  )
}

export default AppWrap