import React from 'react'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contacts/Contact'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
