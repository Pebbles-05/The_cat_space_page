import React from 'react';
import Conclusion from '../components/Project4Components/Conclusion';
import FinalScreens from '../components/Project4Components/FinalScreens';
import Hero from '../components/Project4Components/Hero';
import Moodboard from '../components/Project4Components/Moodboard';
import Wireframes from '../components/Project4Components/Wireframes';
import DesignProcess from "../components/Project4Components/DesignProcess";
import Footer from '../subcomponent/Footer';

export default function Project4() {
  return (
    <div className='container ml-auto mr-auto px-7 md:px-4 md:mx-auto mt-24'>
      <Hero />
      <DesignProcess />
      <Moodboard />
      <Wireframes />
      <FinalScreens />
      <Conclusion />
      <Footer />
    </div>
  );
}
