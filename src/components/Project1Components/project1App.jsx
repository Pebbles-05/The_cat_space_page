import React from 'react';

import Conclusion from './AppSubComponents/Conclusion';
import FinalScreens from './AppSubComponents/FinalScreens';
import Hero from './AppSubComponents/Hero';
import Wireframes from './AppSubComponents/Wireframes';
import Creditfooter from '../../Routesubcomponets/creditfooter';

export default function Project1App() {
  return (
    <div className='project1app'>
      <Hero />
      <Wireframes />
      <FinalScreens />
      <Conclusion />
      <Creditfooter />
     
     
    </div>
  );
}
