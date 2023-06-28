import React from 'react'
import { motion } from "framer-motion"

const ASLInfoSection = () => (
  <section>

    <div className=' z-40 main_info_container h-auto p-24 flex items-center justify-center'>
      <motion.div

        className='z-20 container flex flex-col gap-8 text-white items-start justify-center'>
        <div className="info-headings flex flex-col gap-1">
          <h1 className='text-4xl font-bold'>The Silent Challenge </h1>
          <p className='text-xl text-slate-900'>Bridging Communication Gaps with ASL</p>
        </div>
        <div className="info-desc text-lg">
          American Sign Language (ASL) overcomes communication barriers for the deaf community. With millions of users globally, ASL empowers deaf individuals to express and connect. However, limited knowledge and accessibility persist. Embracing ASL fosters inclusivity and breaks communication bounds.
        </div>
      </motion.div>
    </div>

  </section>
)


export default ASLInfoSection