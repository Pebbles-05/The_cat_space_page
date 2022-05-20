import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import circlebg from "../media/circle_bg";
import imgdata from '../utils/fadingimgdata';



export default function Hero() {
 
//  inting aos 
useEffect(() => {
  AOS.init();

  
}, [])



 
// using state for controling imgdata

  const[imgsdata,setimg]=useState(imgdata);
  const[imgheight,setheight]=useState();

// checking height of the images so can fix height of the div
  const heightRef = useRef();

  function checkheight(){
    const Height = heightRef.current.clientHeight;
    setheight(Height)
  }
 

useEffect(() => {
  checkheight();

  
}, [imgsdata])




 useEffect(() => {
 
 window.addEventListener("resize",checkheight);

  
 }, [])
 


  return (
    <div id='hero' data-aos="fade" data-aos-duration="2000" >
        <div className='hero_intro'  >Hey ,<br />
I am Ishika, a UX 
designer based in India. I create designs that are <br />


<div className="hero_intro_fadingtext"  >
<span>human-centric</span>
<span>creative</span>
<span>seamless</span>
<span>human-centric</span>
</div>


</div>
        

        <div className="hero_banner"  >
      
          <div className='hero_bannerbg'>{circlebg}</div>
          <div className="hero_banner_fadingimg" style={{ height:imgheight + "px"}}
           >
             {imgdata.map((img,index)=>{ return <div className='fadimg' ref={heightRef}  key={index}> {img}</div>  })}

             



</div>
        </div>
      

    </div>
  )
}
