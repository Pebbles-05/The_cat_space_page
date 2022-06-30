import React from 'react';
import FinalScreens from '../components/Project3Components/FinalScreens';
import Creditfooter from '../Routesubcomponets/creditfooter';
import Hero from '../components/Project3Components/Hero';
import Moodboard from '../components/Project3Components/Moodboard';
import UserFlow from '../components/Project3Components/UserFlow';
import Wireframes from '../components/Project3Components/Wireframes';

export default function Project3() {
  return (
    <div className='project3'>
      <Hero />
      <UserFlow />
      <Moodboard />
      <Wireframes />
      <FinalScreens />
      <Creditfooter />
    </div>
  );
}
