import React, {   useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useMousePosition from "../hooks/useMousePosition";






export default function Projectitem({img,title,subtitle,csbtn}) {


  const {x , y}=useMousePosition();

  const [isactive,setactive]=useState(false);

  

  const handleActive=()=>{
    setactive(!isactive);
  }

// code to animate in view
const [ref , inview ]=useInView();








  return (
    <div className={inview ? "projectitem active" : "projectitem"}  onMouseEnter={handleActive} onMouseLeave={handleActive}>

     
      <div className= "projectitem__img" ref={ref}   >
          <img   style={isactive ? {transform:`translate(${x/50 }% , ${y/100}%)`,transition: "transform 0.1 linear"} : {transform:"translate(0,0)",transition: "transform 0.1s linear"}} src={img} alt="projectimg" />
      </div>  

        <div className="projectitem__info" >
            <h1 className='projectitem__info_title' data-swiper-parallax="-1000" >{title}</h1>

      <p className='projectitem__info_subtitle' data-swiper-parallax="-1500">{subtitle}</p>

     <p className='projectitem__info_csbtn' data-swiper-parallax="-2000">  {csbtn} </p>

        </div>
   
    


    </div>
  )
}

