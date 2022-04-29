import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { cv } from '../../constants';
import { AiOutlineCloudDownload } from 'react-icons/ai';

const scaleVariants = {
  whileInView: {
    opacity: [0, 1],
    transition: {
      duration: 0.8,
      ease: 'easeInOut'
    }
  }
}

const About = () => {

  return (
    <div className='app__about-container'>
      <div className='app__about-media'>
        <img src={images.profile} className='app__about-profileimg' alt="profile" />

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className='app__about-circles'
        >
        {[images.react, images.redux, images.figma].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle"/>
          </div>
        ))}
        </motion.div>
      </div>

      <motion.div 
        whileInView={{ x: [100,0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className='app__about-content'
      >
        <h2>About Me</h2>
        <motion.p
          whileInView={{ x: [50,0], opacity: [0, 1] }}
          transition={{ delay: 0.2 }}
        >
        I'm a Graduate Student from <strong>Henry</strong>'s Bootcamp. 
        I developed my skills as a Full Stack Developer, 
        but nowadays I seek to improve my work as a <strong>Frontend and Web3 Developer</strong>.
        During the pandemic, I decided to change the course of my life and I was encouraged to enter the IT world.
        <br /><br />
        I love developing innovative and creative projects. I'm always looking for new challenges and I am usually quite 
        meticulous when it comes to working. I look for a way to make my projects pleasing to the eye.
        </motion.p>
        <motion.button whileInView={{ opacity:[0,1]}} transition={{ duration: 0.3 }}>
          <a href={cv} download />
          
          Download CV <AiOutlineCloudDownload/>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about') , 
  'about',
  'app__secondarybg'
);