import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://github.com/martinbogado' target='_blank'>
            <BsGithub />
        </a>
        <a href='https://www.linkedin.com/in/martinbogado/' target='_blank'>
            <BsLinkedin />
        </a>
    </div>
  )
}


export default SocialMedia