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
              <small>2+ Years Working</small>
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
            I am a full-stack MERN developer with a passion for building
            beautiful and functional websites and web applications. I have
            experience working with the MERN stack (MongoDB, Express.js, React,
            and Node.js) and am skilled in both front-end and back-end web
            development. I am a creative problem-solver and quick learner,
            always eager to stay updated with the latest technologies and trends
            in the industry.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
