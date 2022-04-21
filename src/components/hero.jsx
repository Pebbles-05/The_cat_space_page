import React from 'react'
import banner from  "../media/hero_banner.png";

export default function Hero() {
  return (
    <div id='hero'>
        <div className='hero_intro'>Hey ,<br />
I am Ishika, a UX 
designer based in India. I create designs that are <br />


<div className="fading_text">
<span>seamless</span>
<span>creative</span>
<span>human-centric</span>
<span>seamless</span>
</div>


</div>
        

        <div className="hero_banner">
          <img src={banner} alt="hero_banner" />
        </div>
      

    </div>
  )
}
