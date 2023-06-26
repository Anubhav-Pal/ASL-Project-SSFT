import React from 'react'
import { Ok, Victory, Heart, ILY, Point_up, heartLeft, heartright } from '../assets/index.js'
import { motion } from 'framer-motion'
const emoticons = () => (
    <div className=' bg-primary'>
        <div className="container flex flex-row items-center justify-between p-10 ">
            <motion.div
                whileInView={{ x: [-100, -50, 1], opacity: [0, 0, 1] }}
                transition={{ duration: 1 }}
                className='emoticons-left flex flex-row items-center justify-end w-1/2 gap-20 py-10'
            >
                <img className='w-[90px]' src={Point_up} alt="" />
                <img className='w-[80px]' src={Victory} alt="" />
                <img className='w-[120px]' src={heartLeft} alt="" />
            </motion.div>
            <motion.div
                whileInView={{ x: [100, 50, -1], opacity: [0, 0, 1] }}
                transition={{ duration: 1 }}
                className='emoticons-left flex flex-row items-center justify-start w-1/2 gap-20 py-10'
            >
                <img className='w-[120px]' src={heartright} alt="" />
                <img className='w-[100px]' src={ILY} alt="" />
                <img className='w-[90px]' src={Ok} alt="" />
            </motion.div>

        </div>
    </div>
)

export default emoticons