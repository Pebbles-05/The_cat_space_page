import React from 'react';
import Hero from './hero';
import Strip from './strip';
import Projects from './projects';

export default function Home() {
  return (
    <div id='home'>
        <Hero />
        <Strip />
        <Projects />
    </div>
    
  )
}
