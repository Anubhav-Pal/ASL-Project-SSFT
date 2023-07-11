import React from 'react'

const Button =(props) => {
  return (
    
      <button className='bg-slate-200 w-28 h-9 rounded mr-32'>
        {props.text}
      </button>
    
  )
}

export default Button
