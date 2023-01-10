import React from "react";
import CTA from "./CTA";
import ME from  '../../assets/me.png'
import "./home.css";
import HomeSocial from "./HomeSocial";
const Header = () => {
  return (
    <div className="home">
      <div className="home__container container">
        <div className="home__data">
          <h5>Hello I'm</h5>
          <h1>Basil Pulikuth</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
        </div>
        <div className="me">
          <img src={ME} alt="" className="home__img" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
        <HomeSocial />
      </div>
    </div>
  );
};

export default Header;
