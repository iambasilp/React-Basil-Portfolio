import React from "react";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";
const About = () => {
  return (
    <section className="about section" id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="about__container container grid">
        <div className="me">
          <img src={ME} alt="about image" className="about__img" />
        </div>
        <div className="about__data">
          <div className="about__cards grid">
            <article className="about__card">
              <FaAward className="about__card-icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__card-icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__card-icon" />
              <h5>Projects</h5>
              <small>80+</small>
            </article>
          </div>
          <p className="about__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
            fuga consectetur! Architecto distinctio voluptate ipsam eum autem
            ullam, expedita porro tempora quidem cupiditate facilis praesentium?
            Ullam porro laborum tempore explicabo.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};
export default About;
