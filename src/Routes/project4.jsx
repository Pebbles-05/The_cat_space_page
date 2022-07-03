import React from 'react';
import Conclusion from '../Routesubcomponets/Project4Components/Conclusion';
import FinalScreens from '../Routesubcomponets/Project4Components/FinalScreens';
import Hero from '../Routesubcomponets/Project4Components/Hero';
import Moodboard from '../Routesubcomponets/Project4Components/Moodboard';
import Wireframes from '../Routesubcomponets/Project4Components/Wireframes';
import Creditfooter from '../Routesubcomponets/creditfooter';
import DesignProcess from "../Routesubcomponets/Project4Components/DesignProcess";
import Nextprojectbtn from '../Routesubcomponets/nextprojectbtn';


export default function Project4() {
  return (
    <div className='project4'>
      <Hero />
      <DesignProcess />
      <Moodboard />
      <Wireframes />
      <FinalScreens />
      <Conclusion />
      <Nextprojectbtn nextpath="/project_Ethernals_HACKATHON_2022" prevpath='/project_Personal_Portfolio_Design'  nextbtn={true} prevbtn={true}/>
      <Creditfooter />
    </div>
  );
}
