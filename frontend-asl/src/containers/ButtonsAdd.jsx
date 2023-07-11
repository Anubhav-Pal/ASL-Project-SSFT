import React from 'react'
import Button from '../components/button'
import { btntext } from '../utils/btn-text'

const ButtonsAdd = () => {
  return (
    <div className='container align-center'>
      {/* <Button text="name"/> */}
      <div className='mb-3 '>
      {btntext.map((btn) => (
        <Button text={btn.i0} />
      ))}
      </div>
      <div className='mb-3'>
      {btntext.map((btn) => (
        <Button text={btn.i1} />
      ))}
      </div >
      <div className='mb-3'>
      {btntext.map((btn) => (
        <Button text={btn.i2} />
      ))}
      </div>
      <div className='mb-3'>
      {btntext.map((btn) => (
        <Button text={btn.i3} />
      ))}
      </div>
      <div className='mb-3'>
      {btntext.map((btn) => (
        <Button text={btn.i4} />
      ))}
      </div>
    </div>
  )
}

export default ButtonsAdd
