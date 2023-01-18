import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import demo1 from '../../assets/portfolioliveimage.jpg'
const Portfolio = () => {
  const PortfolioData = [
    {
      id: 1,
      photo: IMG1,
      title: "Fully Responsive Modern UI/UX chat GPT-3 React Website",
      github: "https://github.com/iambasilp/GPT3-Modern-react-website",
      demo: `${demo1}`
    },
    {
      id: 2,
      photo: IMG2,
      title: "Crypte Currency Dashboard & Financial Visualization",
      github: "https://github.com",
      demo: "https://cdn.dribbble.com/users/1998175/screenshots/16766927/media/bb23da53a260e2af2e9730fce44ab684.jpg?compress=1&resize=768x576&vertical=top",
    },
    {
      id: 3,
      photo: IMG3,
      title: "Crypte Currency Dashboard & Financial Visualization",
      github: "https://github.com",
      demo: "https://cdn.dribbble.com/users/1998175/screenshots/16766927/media/bb23da53a260e2af2e9730fce44ab684.jpg?compress=1&resize=768x576&vertical=top",
    },
    {
      id: 4,
      photo: IMG4,
      title: "Crypte Currency Dashboard & Financial Visualization",
      github: "https://github.com",
      demo: "https://cdn.dribbble.com/users/1998175/screenshots/16766927/media/bb23da53a260e2af2e9730fce44ab684.jpg?compress=1&resize=768x576&vertical=top",
    },
    {
      id: 5,
      photo: IMG5,
      title: "Crypte Currency Dashboard & Financial Visualization",
      github: "https://github.com",
      demo: "https://cdn.dribbble.com/users/1998175/screenshots/16766927/media/bb23da53a260e2af2e9730fce44ab684.jpg?compress=1&resize=768x576&vertical=top",
    },
    {
      id: 6,
      photo: IMG6,
      title: "Crypte Currency Dashboard & Financial Visualization",
      github: "https://github.com",
      demo: "https://cdn.dribbble.com/users/1998175/screenshots/16766927/media/bb23da53a260e2af2e9730fce44ab684.jpg?compress=1&resize=768x576&vertical=top",
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
