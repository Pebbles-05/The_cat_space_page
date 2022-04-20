import React from 'react'
import banner from  "../media/hero_banner.png";

export default function Hero() {
  return (
    <div id='hero'>
        <div className='hero_intro'>Hey ,<br />
I am Ishika, a UX 
designer based in India. I create designs that are <br />
human-centric</div>
        

        <div className="hero_banner">
          <img src={banner} alt="hero_banner" />
        </div>
      

    </div>
  )
}
