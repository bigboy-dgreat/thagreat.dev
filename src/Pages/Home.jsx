import React from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import ProjectCard from '../ProjectCard';
import About from '../About';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
     <Navbar />
     <Hero />
     <ProjectCard />
     <About />
     <Footer />
    </>
  );
};

export default Home;
