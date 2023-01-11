import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './services.css'
const Services = () => {
  return (
    <section className="services section" id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="services__container container grid">  
        <article className='services__card'>
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>
            <ul className='services__list'>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          
        </article>
        <article className='services__card'>
          <div className="services__head">
            <h3>Web Development</h3>
          </div>
            <ul className='services__list'>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          
        </article>
        <article className='services__card'>
          <div className="services__head">
            <h3>Content Creation</h3>
          </div>
            <ul className='services__list'>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                {<BiCheck className='services__card-icon' />  }
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          
        </article>

        </div>
    </section>
  )
}

export default Services
