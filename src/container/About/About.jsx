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

      <div className='app__about-content'>
        <h2>About Me</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button>
          <a href={cv} download />
          
          Download CV <AiOutlineCloudDownload/>

        </button>
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about') , 
  'about',
  'app__whitebg'
);