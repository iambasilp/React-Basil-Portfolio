import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.jpg";
import IMG8 from "../../assets/portfolio8.jpg";
import IMG9 from "../../assets/portfolio9.jpg";
import IMG10 from "../../assets/portfolio10.jpg";
import IMG11 from "../../assets/portfolio11.jpg";
import IMG12 from "../../assets/portfolio12.jpg";
import IMG13 from "../../assets/portfolio13.jpg";
import IMG14 from "../../assets/portfolio14.jpg";
import IMG15 from "../../assets/portfolio15.jpg";
import IMG16 from "../../assets/portfolio16.jpg";
import IMG17 from "../../assets/portfolio17.jpg";
import IMG18 from "../../assets/portfolio18.jpg";
import IMG19 from "../../assets/portfolio19.jpg";
import demo1 from '../../assets/portfolioliveimage.jpg'
const Portfolio = () => {
  const PortfolioData = [
    {
      id: 1,
      photo: IMG1,
      title: "Build and Deploy a Better Spotify 3.0 Clone Music App with React 18! (Tailwind, Redux, RapidAPI)",
      github: "#",
      demo: `${demo1}`
    },
    {
      id: 2,
      photo: IMG2,
      title: "Build and Deploy a Modern React 18 Fitness Exercises App With APIs | RapidAPI",
      github: "https://github.com",
      demo: "#",
    },
    {
      id: 3,
      photo: IMG3,
      title: "Build and Deploy a Modern YouTube Clone Application in React JS with Material UI 5 | RapidAPI",
      github: "https://github.com",
      demo: "https://cdn.dribbble.com/users/1998175/screenshots/16766927/media/bb23da53a260e2af2e9730fce44ab684.jpg?compress=1&resize=768x576&vertical=top",
    },
    {
      id: 4,
      photo: IMG4,
      title: "Fully Responsive Bank Website with Modern UI/UX in React JS with Tailwind",
      github: "https://github.com/iambasilp/Banking-Modern-react-website",
      demo: "https://spontaneous-naiad-0a0efd.netlify.app/",
    },
    {
      id: 5,
      photo: IMG5,
      title: "Fully Responsive Restaurant Website with Modern UI and UX in ReactJS",
      github: "https://github.com/iambasilp/Restaurant-Modern-react-website",
      demo: "https://iambasilp.github.io/Restaurant-Modern-react-website/",
    },
    {
      id: 6,
      photo: IMG6,
      title: "Fully Responsive Modern UI/UX chat GPT-3 ReactJS Website",
      github: "https://github.com/iambasilp/GPT3-Modern-react-website",
      demo: "https://unique-jalebi-d27bfa.netlify.app/",
    },
    {
      id: 7,
      photo: IMG7,
      title: "ARTIFICIAL INTELLIGENCE Voice Assistant News React App | Alan AI, JavaScript",
      github: "https://github.com/iambasilp/Ai-News-Website",
      demo: "https://iambasilp.github.io/Ai-News-Website/",
    },
    {
      id: 8,
      photo: IMG8,
      title: "Responsive Webint Website Design Using HTML CSS & JavaScript",
      github: "https://github.com/iambasilp/Webint-Website",
      demo: "https://iambasilp.github.io/Webint-Website/",
    },
    {
      id: 9,
      photo: IMG9,
      title: "Responsive Samoosa Website Design Using HTML CSS & JavaScript",
      github: "https://github.com/iambasilp/Basil-Ogito-test",
      demo: "https://iambasilp.github.io/Basil-Ogito-test/",
    },
    {
      id: 10,
      photo: IMG10,
      title: "Responsive Website Design Using HTML Sass & JavaScript Delivery Landing Page",
      github: "https://github.com/iambasilp/Responsive-delivery-website-",
      demo: "https://iambasilp.github.io/Responsive-delivery-website-/",
    },
    {
      id: 11,
      photo: IMG11,
      title: "Create a Responsive Halloween Website Design Using HTML CSS & JavaScript",
      github: "https://github.com/iambasilp/Halloween-Website",
      demo: "https://iambasilp.github.io/Halloween-Website/",
    },
    {
      id: 12,
      photo: IMG12,
      title: "Grocery-List Using JavaScript",
      github: "https://github.com/iambasilp/Grocery-List",
      demo: "https://iambasilp.github.io/Grocery-List/",
    },
    {
      id: 13,
      photo: IMG13,
      title: "Todo App Using JavaScript",
      github: "https://github.com/iambasilp/TodolistApp",
      demo: "https://iambasilp.github.io/TodolistApp/",
    },
    {
      id: 14,
      photo: IMG14,
      title: "Calculator App using Javascript",
      github: "https://github.com/iambasilp/Javascript-Calculator",
      demo: "https://iambasilp.github.io/Javascript-Calculator/",
    },
    {
      id: 15,
      photo: IMG15,
      title: "Form Handling and Validating using Javascript",
      github: "https://github.com/iambasilp/Form-Validation",
      demo: "https://iambasilp.github.io/Form-Validation/",
    },
    {
      id: 16,
      photo: IMG16,
      title: "Recipe App using Advanced Javascript",
      github: "https://github.com/iambasilp/Recipe-App",
      demo: "https://iambasilp.github.io/Recipe-App/",
    },
    {
      id: 17,
      photo: IMG17,
      title: "Coming soon Counter using Javascript Intermediate",
      github: "https://github.com/iambasilp/Coming-Soon-Counter",
      demo: "https://iambasilp.github.io/Coming-Soon-Counter/",
    },
    {
      id: 18,
      photo: IMG18,
      title: "Random Color generator",
      github: "https://github.com/iambasilp/Random-Color-Generator",
      demo: "https://iambasilp.github.io/Random-Color-Generator/",
    },
    {
      id: 19,
      photo: IMG19,
      title: "Javascript Note Taking App",
      github: "https://github.com/iambasilp/Note-taking-App",
      demo: "https://iambasilp.github.io/Note-taking-App/",
    },

  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="portfolio__container container">
        {PortfolioData.map(({ id, photo, title, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                src={photo}
                alt="portfolio image"
                className="portfolio__img"
              />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__buttons">
              <a href={github} className="btn" target="_blank">
                github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
