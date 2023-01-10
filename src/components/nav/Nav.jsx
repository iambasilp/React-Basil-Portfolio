import React from "react";
import {useState} from 'react'
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
const Nav = () => {
  const [activeBar, setActiveBar] = useState('#')
  return (
    <nav className="nav">
      <ul className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" onClick={()=>{setActiveBar('#')}} className={`nav__link ${activeBar === "#" ? "active" : "" }`}>
              <AiOutlineHome />
            </a>
          </li>
          <li className="nav__item">
            <a href="#about"  onClick={()=>{setActiveBar("#about")}} className={`nav__link ${activeBar === "#about" ? "active" : "" }`}>
              <AiOutlineUser />
            </a>
          </li>
          <li className="nav__item">
            <a href="#experience" onClick={()=>{setActiveBar("#experience")}} className={`nav__link ${activeBar === "#experience" ? "active" : "" }`}>
              <BiBook />
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" onClick={()=>{setActiveBar("#services")}} className={`nav__link ${activeBar === "#services" ? "active" : "" }`}>
              <RiServiceLine />
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link" onClick={()=>{setActiveBar("#contact")}} className={`nav__link ${activeBar === "#contact" ? "active" : "" }`}>
              <BiMessageSquareDetail />
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Nav;
