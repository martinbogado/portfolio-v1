import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

import { images } from '../../constants';
import { cv } from '../../constants';

import { AiOutlineCloudDownload } from 'react-icons/ai';
import './About.scss';

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
          With over three years of experience in <strong>Full Stack development</strong>, I
          specialize in <strong>React + Node.js</strong> and have a strong knowledge in building
          applications using Next.js.
          <br />
          I have contributed to a variety of projects of
          different complexity, from participating in hackathons, like <strong>Chainlink Spring 2022 Hackathon</strong> and the <strong>AI Code Fest by Globant</strong>,
          covering diverse industries such as AI and Blockchain, to collaborations with
          international companies, like <strong>SoyHabitue</strong> and <strong>PideDirecto</strong>.
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