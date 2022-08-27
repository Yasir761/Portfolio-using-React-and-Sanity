import React from 'react'
import {BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
const SocialMedia = () => {
  return (
    <div className='app__social'>
    <div>
    <a href="https://twitter.com/Yasir2912" target='_blank'>

    <BsTwitter />
    </a>
    </div>
    <div>
    <a href="https://www.instagram.com/open_code101/?hl=en" target='_blank'>

    <BsInstagram/>
    </a>
    </div>
    <div>
    <a href="https://github.com/Yasir761" target='blank'>

    <BsGithub/>
    </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/mohammad-yasir-b5a8101b4/" target='blank'>
        <BsLinkedin/>
      </a>
    </div>
    </div>

  )
}

export default SocialMedia