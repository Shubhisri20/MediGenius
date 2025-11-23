import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import SymptomChecker from '../components/SymptomChecker';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <SymptomChecker />
      <Testimonials />
    </div>
  );
};

export default Home;
