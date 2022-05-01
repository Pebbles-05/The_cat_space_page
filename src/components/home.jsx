import React from 'react';
import Hero from './hero';
import Strip from './strip';
import Projects from './projects';
import mood from "../media/moodboard.png"

export default function Home() {
  return (
    <div id='home'>
        <Hero />
        <Strip />
        <Projects />
        <img src={mood} alt="" />
    </div>
    
  )
}
