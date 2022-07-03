import React from 'react';
import FinalScreens from '../Routesubcomponets/Project3Components/FinalScreens';
import Creditfooter from '../Routesubcomponets/creditfooter';
import Hero from '../Routesubcomponets/Project3Components/Hero';
import Moodboard from '../Routesubcomponets/Project3Components/Moodboard';
import UserFlow from '../Routesubcomponets/Project3Components/UserFlow';
import Wireframes from '../Routesubcomponets/Project3Components/Wireframes';
import Nextprojectbtn from "../Routesubcomponets/nextprojectbtn"

export default function Project3() {
  return (
    <div className='project3'>
      <Hero />
      <UserFlow />
      <Moodboard />
      <Wireframes />
      <FinalScreens />
      <Nextprojectbtn nextpath="" prevpath='/project_wiggle_app_design'  nextbtn={false} prevbtn={true}/>
      <Creditfooter />
    </div>
  );
}
