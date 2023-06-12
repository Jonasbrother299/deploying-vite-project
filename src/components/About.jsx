import React, { useEffect } from 'react'
import { motion } from "framer-motion"

import { styles } from '../styles'
import { services } from '../constants'

import { fadeIn, textVariant } from "../utils/motion"

import ServiceCard from "./ServiceCard"

import { SectionWrapper } from '../hoc'

const About = () => {

  useEffect(() => {
    const handleMouseMove = (e) => {
      for (const card of document.querySelectorAll('.card')) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    const cardsElement = document.querySelector('#cards');
    if (cardsElement) {
      cardsElement.addEventListener('mousemove', handleMouseMove);

      return () => {
        cardsElement.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);
  const cardsNumber = ['', '', '', '', '', ''];



  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction</p>
        <h2 className={styles.sectionHeadText}>
          Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] 
      max-w-3xl leading-[30px]'>

        Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Quia eligendi voluptatem
        porro? Tempora at eaque, repellat inventore
        placeat ipsam dolorum tenetur hic sunt
        reiciendis eos perspiciatis
        doloremque asperiores facere distinctio!
      </motion.p>
      <div className="wrapper_cards">
        <div id='cards'>
          {services.map((service, index) => (
            <motion.div
              key={service.title + index}
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            >
              <div className="card">
                <div className="card-border"></div>
                <div className="card-content">
                  <ServiceCard key={service.title} index={index} {...service} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")