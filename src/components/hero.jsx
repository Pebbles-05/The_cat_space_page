import React, { useEffect, useRef, useState } from 'react';
import herobg from "../media/hero_bg.png";
import fadingimg1 from "../media/fadingimg1.png";
import fadingimg2 from "../media/fadingimg2.png";
import fadingimg3 from "../media/fadingimg3.png";


export default function Hero() {

  const imgdata=[fadingimg1,fadingimg2,fadingimg3,fadingimg1];

  const[imgheight,setheight]=useState();


  const heightRef = useRef();

  function checkheight(){
    const Height = heightRef.current.clientHeight;
    setheight(Height)
  }
 

useEffect(() => {
  checkheight()

  
}, [imgdata])




 useEffect(() => {
 
 window.addEventListener("resize",checkheight);
 return ()=>{
  window.removeEventListener("resize",checkheight);
 }
  
 }, [])
 


  return (
    <div id='hero'>
        <div className='hero_intro'>Hey ,<br />
I am Ishika, a UX 
designer based in India. I create designs that are <br />


<div className="hero_intro_fadingtext" >
<span>human-centric</span>
<span>creative</span>
<span>seamless</span>
<span>human-centric</span>
</div>


</div>
        

        <div className="hero_banner">
      
          <div className='hero_bannerbg'><img  src={herobg} alt="herobg" /></div>
          <div className="hero_banner_fadingimg" style={{height:imgheight + "px"}}
           >
             {imgdata.map((img,index)=>{ return <img key={index} ref={heightRef}  src={img} alt="img" /> })}

             



</div>
        </div>
      

    </div>
  )
}
