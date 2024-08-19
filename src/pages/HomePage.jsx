// import React from 'react';
import Navbar from '../components/header';
import Hero from '../components/hero';
import About from '../components/about'
 import Services from '../components/services';
import Testimonials from '../components/testimonials';
import Footer from '../components/footer';


const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-0 px-14'>
        <Hero />
        <About />
        <Services/>
        <Testimonials/>
        <Footer/>
      </div>
      
    </>
  );
};

export default HomePage;
