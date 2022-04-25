import React, { useState, useEffect } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Confetti from '../../components/Confetti/Confetti';
import { motion } from 'framer-motion';

import './Footer.scss';

const Footer = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <>
      <Confetti confirmation={isFormSubmitted}/>
      
      <h2 className='head-text'>Take a coffe & chat with me</h2>
    
      <div className='app__footer-cards'>

        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:martinbogado@live.com.ar" className='p-text'>martinbogado@live.com.ar</a>
        </div>
      
      </div>

      {
        !isFormSubmitted ?
        <form 
        className='app__footer-form app__flex'
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className='app__flex'>
          <input 
            type="text" 
            name='name' 
            className='p-text' 
            placeholder='Your Name' 
            value={name} 
            onChange={handleChangeInput} 
          />
        </div>
        <div className='app__flex'>
          <input 
            type="email" 
            name='email' 
            className='p-text' 
            placeholder='Your Email' 
            value={email} 
            onChange={handleChangeInput} 
          />
        </div>

        <div>
          <textarea 
            className='p-text'
            placeholder='Your Message'
            value={message}
            name='message'
            onChange={handleChangeInput} 
          />
        </div>

        <button type='submit' className='p-text'>{ loading ? 'Sending' : 'Send Message'}</button>
      </form> 
       : 
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <h3 className='head-text'>Thank you for getting in touch 🙌</h3>
      </motion.div>
      }
      <hr 
        className='app__footer-division'
      />
      <div className='app__footer-copyright'>
        <img src={images.logo} alt="logo" />
        <span>Martin Bogado</span>

        <div className='app__footer-social'>
          <a href='https://github.com/martinbogado' target='_blank'>
              <BsGithub />
          </a>
          <a href='https://www.linkedin.com/in/martinbogado/' target='_blank'>
              <BsLinkedin />
          </a>
        </div>

        <div className='copyright'>
          <p className='p-text'>© 2022 MARTIN All rights reserved</p>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
)