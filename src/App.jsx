import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import Skills from './components/Skills';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import Experience from './components/Experience';

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <>
      <Navbar />
      
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <BackToTop/>
      <Footer/>
      <SocialLinks/>
      
      
      {/* We will add Home, About, etc. here next */}
    </>
  );
}

export default App;
