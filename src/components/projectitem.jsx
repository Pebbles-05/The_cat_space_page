import React, {   useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useMousePosition from "../hooks/useMousePosition";
import useWindowSize from "../hooks/useWindowSize";






export default function Projectitem({img,title,subtitle,csbtn,activeindex}) {

  const{width}=useWindowSize();

  const {x , y}=useMousePosition();

  const [isactive,setactive]=useState(false);

  

  const handleActive=()=>{
    setactive(!isactive);
  }

// code to animate in view
const [ref , inview ]=useInView();








  return (
    <div  className= "projectitem"  onMouseEnter={handleActive} onMouseLeave={handleActive}>

     
      <div className={!inview?"projectitem__img slandanim":"projectitem__img slandaim_active"} ref={ref}  >
          <img   style={isactive ? {transform: width<=1000?"translate(0,0)" : `translate(${x/50 }% , ${y/100}%)`, transition:"transform 0.1 linear"}:{transform:"translate(0,0)",transition: "transform 0.1s linear"}} src={img} alt="projectimg" />
      </div>  

        <div className={!inview?"projectitem__info slandanim":"projectitem__info slandaim_active"}>
            <h1  className="projectitem__info_title" data-swiper-parallax="-1000" >{activeindex}{title}</h1>

      <p className='projectitem__info_subtitle' data-swiper-parallax="-1500">{subtitle}</p>

     <p className='projectitem__info_csbtn' data-swiper-parallax="-2000">  {csbtn} </p>

        </div>
   
    


    </div>
  )
}

