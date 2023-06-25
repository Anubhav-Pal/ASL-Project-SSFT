import React from 'react'
import { motion } from "framer-motion"

const ASLInfoSection = () => (
  <section>

    <div className='main_info_container h-auto p-24 flex items-center justify-center'>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className='container flex flex-col gap-20 items-start justify-cente'>
        <div className="info-headings flex flex-col gap-2">
          <h1 className='text-4xl text-black font-bold'>The Silent Challenge </h1>
          <p className='text-2xl text-slate-900'>Bridging Communication Gaps with ASL</p>
        </div>
        <div className="info-desc text-2xl">
          American Sign Language (ASL) overcomes communication barriers for the deaf community. With millions of users globally, ASL empowers deaf individuals to express and connect. However, limited knowledge and accessibility persist. Embracing ASL fosters inclusivity and breaks communication bounds.
        </div>
      </motion.div>
    </div>

  </section>
)


export default ASLInfoSection