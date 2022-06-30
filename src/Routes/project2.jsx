import React from 'react';
import DesignProcess from '../components/Project2Components/DesignProcess';
import FinalScreens from '../components/Project2Components/FinalScreens';
import Hero from '../components/Project2Components/Hero';
import Moodboard from '../components/Project2Components/Moodboard';
import Wireframes from '../components/Project2Components/Wireframes';
import UsabilityTesting from '../components/Project2Components/UsabilityTesting';
import Creditfooter from '../Routesubcomponets/creditfooter';

export default function Project2() {
  return (
    <div className='project2'>
      <Hero />
      <DesignProcess />
      <Moodboard />
      <Wireframes />
      <FinalScreens />
      <UsabilityTesting />
      <Creditfooter />
    </div>
  );
}
