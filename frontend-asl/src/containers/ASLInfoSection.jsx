import React from 'react'
import { motion } from 'framer-motion'

const ASLInfoSection = () => (
  <section>
    <div className='main_info_container h-screen'>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className='container flex flex-col items-start justify-center text-white'>
        <div className="info-headings">
          <h2>The Silent Challenge </h2>
          <p>Bridging Communication Gaps with ASL</p>
        </div>
        <div className="info-desc">
          American Sign Language (ASL) overcomes communication barriers for the deaf community. With millions of users globally, ASL empowers deaf individuals to express and connect. However, limited knowledge and accessibility persist. Embracing ASL fosters inclusivity and breaks communication bounds.
        </div>

      </motion.div>

    </div>
  </section>
)


export default ASLInfoSection