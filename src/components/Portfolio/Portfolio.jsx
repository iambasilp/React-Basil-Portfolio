import React from 'react'
import './portfolio.css'
const Portfolio = () => {
  return (
    <section className="portfolio section" id="section">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="portfolio__container container">
        <article className='portfolio__item'>
          <div className="portfolio-item-image"></div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn'></a>
          <a href="https://github.com" className='btn btn-primary'></a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
