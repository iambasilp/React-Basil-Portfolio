import React from "react";
import CTA from "./CTA";
import ME from "../../assets/home.svg";
import "./home.css";
import HomeSocial from "./HomeSocial";
const Header = () => {
  return (
    <div className="home">
      <div className="home__container container grid">
        <div className="home__data">
          <h1>
            <span>Hello I'am</span> <br /> Basil Pulikuth
          </h1>
            <h5>MERN + AI developer</h5>
          <p className="home__description">
            I’m a MERN Developer based on India. curious to learn more about
            developing scalable distributed systems, loves problem solving and
            cares about read
          </p>
          <CTA/>
          <HomeSocial/>
        </div>
        <img src={ME} alt="Home image" className="home__img" />
      </div>
    </div>
  );
};

export default Header;
