import React from 'react'
import { Ok, Victory, Heart, ILY, Point_up } from '../assets/index.js'
import { motion } from 'framer-motion'
const emoticons = () => (
    <div className=' bg-primary'>
    <motion.div 
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }} className='flex bg-primary justify-between px-40 pt-32'>
        <img src={Point_up} alt="Pointup" />
        <img src={Victory} alt="Victory" />
        <img src={Heart} alt="Heart" />
        <img src={ILY} alt="ILY" />
        <img src={Ok} alt="ok" />
    </motion.div>
    </div>
)

export default emoticons