import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div  className='header_socials'>
      <a href="https://www.linkedin.com/" target='_blank'><BsLinkedin/></a>
      <a href="https://www.github.com/" target='_blank'><AiFillGithub/></a>
      <a href="https://www.facebook.com/" target='_blank'><AiFillFacebook/></a>
    </div>
  )
}

export default HeaderSocial