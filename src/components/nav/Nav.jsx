import React from 'react'
import './nav.css'
import { AiFillHome } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { AiFillContacts } from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active'
:''}><BiUserCircle /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active'
:''}><BsFillJournalBookmarkFill /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active'
:''}><AiFillContacts /></a>
    </nav>
  )
}

export default Nav