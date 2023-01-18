import React from "react";
import "./footer.css";
import Logo from '../../assets/logo.png'
import {BsGithub} from 'react-icons/bs'
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
const Footer = () => {
  return (

    <footer className="footer">
      <div className="footer__container container grid">
        <div>
          <a href="https://basil.social" className="footer__logo">
            <img src={Logo} alt="logo image" />
            WEBINT
          </a>
          <p className="footer__description">
            Iam curious to learn more technology
          </p>
        </div>
        <div className="footer__content">
          <div>
            <h3 className="footer__title">Main Menu</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">Home</a>
              </li>
              <li>
                <a href="#about" className="footer__link">About</a>
              </li>
              <li>
                <a href="#experience" className="footer__link">Experience</a>
              </li>
              <li>
                <a href="#services" className="footer__link">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">Portfolio</a>
              </li>
              <li>
                <a href="#testimonials" className="footer__link">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="footer__link">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer__title">Social Media</h3>
            <ul className="footer__social">
              <a href="https://github.com/iambasilp" className="footer__social-link">
                <BsGithub />
              </a>
              <a href="https://www.instagram.com/" className="footer__social-link">
              <FaInstagram />
              </a>
              <a href="https://www.twitter.com/" className="footer__social-link">
              <TiSocialTwitter />
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__info container">
        <span className="footer__copy">
          © Copyright Basil. All rights reserved
        </span>
      </div>
    </footer>
  );
}
export default Footer;
