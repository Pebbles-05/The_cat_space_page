import React from 'react';
import herobg from "../media/hero_bg.png";
import fadingimg1 from "../media/fadingimg1.png";
import fadingimg2 from "../media/fadingimg2.png";
import fadingimg3 from "../media/fadingimg3.png";


export default function Hero() {
  return (
    <div id='hero'>
        <div className='hero_intro'>Hey ,<br />
I am Ishika, a UX 
designer based in India. I create designs that are <br />


<div className="fading_text">
<span>human-centric</span>
<span>creative</span>
<span>seamless</span>
<span>human-centric</span>
</div>


</div>
        

        <div className="hero_banner">
      
          <div className='hero_bg'><img  src={herobg} alt="herobg" /></div>
          <div className="hero_fading_img">

<img src={fadingimg1} alt="" />
<img src={fadingimg2} alt="" />
<img src={fadingimg3} alt="" />
<img src={fadingimg1} alt="" />
</div>
        </div>
      

    </div>
  )
}
