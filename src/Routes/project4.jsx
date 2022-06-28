import React from 'react';
import Conclusion from '../components/Project4Components/Conclusion';
import FinalScreens from '../components/Project4Components/FinalScreens';
import Hero from '../components/Project4Components/Hero';
import Moodboard from '../components/Project4Components/Moodboard';
import Wireframes from '../components/Project4Components/Wireframes';
import Creditfooter from '../Routesubcomponets/creditfooter';
import DesignProcess from "../components/Project4Components/DesignProcess";


export default function Project4() {
  return (
    <div className='container ml-auto mr-auto px-16 md:mx-auto mt-40'>
      <Hero />
      <DesignProcess />
      <Moodboard />
      <Wireframes />
      <FinalScreens />
      <Conclusion />
      <Creditfooter />
    </div>
  );
}
