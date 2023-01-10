import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsDribbble } from 'react-icons/bs'

const HomeSocial = () => {
  return (
    <div className="home__social">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><BsGithub /></a>
        <a href="https://dribble.com" target="_blank" ><BsDribbble /></a>
    </div>
  )
}

export default HomeSocial