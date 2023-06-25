import React from 'react'

const MembersSection = () => {
  return (
    <div className='membersection bg-primary py-18 px-40 text-white'>
      <div >
      <div className='text-4xl font-semibold py-2'>
        Meet our Team
      </div>
      <div className='text-2xl my-2'>
        American Sign Langyage (ASL) overcomes communication barriers for the dead community.
      </div>
      </div>

      <div className="members flex justify-between">

        <div className="member">
          <img src="" alt=""  />
          <div className="details my-4">
            <div className='text-2xl'>Anubhav Pal</div>
            <div className='text-xl'>Designation</div>
          </div>
        </div>

        <div className="member">
          <img src="" alt=""  />
          <div className="details my-4">
            <div className='text-2xl'>Anubhav Pal</div>
            <div className='text-xl'>Designation</div>
          </div>
        </div>

        <div className="member">
          <img src="" alt=""  />
          <div className="details my-4">
            <div className='text-2xl'>Anubhav Pal</div>
            <div className='text-xl'>Designation</div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default MembersSection