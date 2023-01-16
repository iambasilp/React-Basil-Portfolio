import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import "./nav.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar__container container">
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <h1>BS</h1>
          </div>
          <div className="gpt3__navbar-links_container ">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#about">About</a>
            </p>
            <p>
              <a href="#experience">Experience</a>
            </p>
            <p>
              <a href="#services">Services</a>
            </p>
            <p>
              <a href="#contact">Contact</a>
            </p>
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <button type="button">
            <a href="https://github.com/iambasilp">
              Github
              <BsGithub className="button--icon" size={20} />
            </a>
          </button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={29}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={29}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                  <a href="#about">About</a>
                </p>
                <p>
                  <a href="#experience">Experience</a>
                </p>
                <p>
                  <a href="#services">Services</a>
                </p>
                <p>
                  <a href="#contact">Contact</a>
                </p>
              </div>
              <div className="gpt3__navbar-menu_container-links-sign">
                <button type="button">
                  <a href="https://github.com/iambasilp">
                    Github
                    <BsGithub className="button--icon" size={20} />
                  </a>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
