import React from 'react';
import Footer from '../../subcomponent/Footer';
import Conclusion from './AppSubComponents/Conclusion';
import FinalScreens from './AppSubComponents/FinalScreens';
import Hero from './AppSubComponents/Hero';
import Wireframes from './AppSubComponents/Wireframes';

export default function Project1App() {
  return (
    <>
      <Hero />
      <Wireframes />
      <FinalScreens />
      <Conclusion />
      <Footer />
    </>
  );
}
