import React from 'react'
import { Ok, Victory, Heart, ILY, Point_up, heartLeft, heartright } from '../assets/index.js'
import { motion } from 'framer-motion'
const emoticons = () => (
    <div className=' bg-primary pt-10 lg:pt-32'>
        <div className="container flex flex-row items-center justify-between">
            <motion.div
                whileInView={{ x: [-100, -50, 1], opacity: [0, 0, 1] }}
                transition={{ duration: 1 }}
                className='emoticons-left flex flex-row items-center justify-end w-1/2 gap-3 md:gap-10 lg:gap-20 py-0'
            >
                <img className='w-[45px] md:w-[60px] lg:w-[90px]' src={Point_up} alt="emoticon" />
                <img className='w-[40px] md:w-[55px] lg:w-[80px]' src={Victory} alt="emoticon" />
                <img className=' w-[80px] md:w-[100px] lg:w-[120px]' src={heartLeft} alt="emoticon" />
            </motion.div>
            <motion.div
                whileInView={{ x: [100, 50, -1], opacity: [0, 0, 1] }}
                transition={{ duration: 1 }}
                className='emoticons-left flex flex-row items-center justify-start w-1/2 gap-3 md:gap-10 lg:gap-20'
            >
                <img className='w-[80px] md:w-[100px] lg:w-[120px]' src={heartright} alt="emoticon" />
                <img className='w-[55px] md:w-[75px] lg:w-[110px]' src={ILY} alt="emoticon" />
                <img className='w-[45px] md:w-[60px] lg:w-[90px]' src={Ok} alt="emoticon" />
            </motion.div>

        </div>
    </div>
)

export default emoticons