import React, {  useEffect , useState } from 'react';
import { animate, motion ,transform,useAnimation} from 'framer-motion';
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
const animation=useAnimation();


useEffect(()=>{

   if(inview){

     animation.start({
       
       opacity:1,
       transition :{
         type:"ease" , duration :0.2
        }
     })
   }

   if(!inview){

    animation.start({opacity:0})
   }
  
},[inview])




  return (
    <div className='projectitem'  ref={ref}  onMouseEnter={handleActive} onMouseLeave={handleActive}>

      <motion.div  
        animate={animation}
        
        className="projectitem__img" >
          <img  style={isactive ? {transform:`translate(${x/50 }% , ${y/50}%)`,transition: "transform 0.1 linear"} : {transform:"translate(0,0)",transition: "transform 0.1s linear"}} src={img} alt="projectimg" />
      </motion.div>  

        <div className="projectitem__info" >
            <h1 className='projectitem__info_title' data-swiper-parallax="-1000" >{title}</h1>

      <p className='projectitem__info_subtitle' data-swiper-parallax="-1500">{subtitle}</p>

     <p className='projectitem__info_csbtn' data-swiper-parallax="-2000">  {csbtn} </p>

        </div>


    </div>
  )
}

