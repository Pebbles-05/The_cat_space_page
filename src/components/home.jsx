import React from "react";
import Hero from './hero';
import Strip from './strip';
import Projects from './projects';
import Reviews from "./reviews";
import Footer from "./footer";



export default function Home() {


  return (
    <div id='home'>
        <Hero />
        <Strip />
        <Projects />
        <Reviews />
        <Footer />
    </div>
    
  )
}
