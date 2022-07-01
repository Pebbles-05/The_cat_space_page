import React from 'react';
import DesignProcess from '../Routesubcomponets/Project2Components/DesignProcess';
import FinalScreens from '../Routesubcomponets/Project2Components/FinalScreens';
import Hero from '../Routesubcomponets/Project2Components/Hero';
import Moodboard from '../Routesubcomponets/Project2Components/Moodboard';
import Wireframes from '../Routesubcomponets/Project2Components/Wireframes';
import UsabilityTesting from '../Routesubcomponets/Project2Components/UsabilityTesting';
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
