import React from 'react'


import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion"

export default function ServiceCard({ index, title, icon }) {
    return (

        <div className='flex justify-evenly items-center flex-col z-10'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain ' />
            <h3 className='text-white text-[20px] font-bold text-center '>{title}</h3>
        </div>

    )
}
