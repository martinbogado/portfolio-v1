import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

import { InteractiveRoom } from '../../components';
import TypeAnimation from 'react-type-animation';

import './Header.scss';

const Header = (props) => {
  return (
    <div className='app__header app__flex'>
  
      <motion.div
        whileInView={{ x: [-100,0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <div style={{ marginLeft: 20}}>
              <h1 className='badge-tittle'>Hello <span>👋</span> I am <p>Martin</p></h1>
            </div>
          </div>

          <motion.div 
            className='app__header-typewrapper'
            whileInView={{ x: [100,0], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
          >
            <TypeAnimation
            cursor={false}
            sequence={[
              'Frontend Dev',
              2000,
              'Web Designer',
              2000,
              'Personal Growth Enthusiast',
              2000,
            ]}
            repeat={Infinity}
            wrapper='h2'
            className='app__header-typewrite'
           />
           <h2 style={{visibility:'hidden'}}>.</h2>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <div>
          <InteractiveRoom />
        </div>
        
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={ props.darkTheme ? images.darkCircle : images.circle }
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home')