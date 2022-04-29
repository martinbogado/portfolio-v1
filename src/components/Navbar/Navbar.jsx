import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion';

import './Navbar.scss';
import { images } from '../../constants';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useMediaQuery } from 'react-responsive';

const Navbar = ({ changeTheme, darkTheme }) => {
  const [toggle, setToggle] = useState(false);
  const query = useMediaQuery({query: '(max-width: 900px)' })

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={ darkTheme ? images.darkLogo : images.lightLogo } alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {
          ['home', 'about', 'work', 'skills', 'contact'].map((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))
        }
      </ul>

      {
        !query && (<ThemeToggle theme={darkTheme} changeTheme={changeTheme} />)
      }
      
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)}/>

        {
          toggle && (
            <motion.div
             whileInView={{ y: [-400, 0], opacity: [ 0.9, 1 ] }}
             transition={{ duration: 0.75, ease: 'easeOut' }}
            >
              <ThemeToggle theme={darkTheme} changeTheme={changeTheme} />
              <HiX onClick={() => setToggle(false)}/>
              <ul>
              {
                ['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                ))
              }
              </ul>
            </motion.div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar