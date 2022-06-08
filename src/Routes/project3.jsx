import React from 'react';
import FinalScreens from '../components/Project3Components/FinalScreens';
import Footer from '../components/Project3Components/Footer';
import Hero from '../components/Project3Components/Hero';
import Moodboard from '../components/Project3Components/Moodboard';
import UserFlow from '../components/Project3Components/UserFlow';
import Wireframes from '../components/Project3Components/Wireframes';
import '../styles/project3.scss';

export default function Project3() {
  return (
    <div className='container ml-auto mr-auto px-3 md:mx-auto mt-24'>
      <Hero />
      <UserFlow />
      <Moodboard />
      <Wireframes />
      <FinalScreens />
      <Footer />
    </div>
  );
}
