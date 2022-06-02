
import Projectitem   from "./projectitem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax  } from "swiper";
import "swiper/css";
import projectdata  from "../utils/projectdata";
import { Link } from "react-router-dom";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { useInView } from 'react-intersection-observer';



// desktop version
const ProjectsWeb=()=>{
  const [activeindex,setactiveindex]=useState(); 
    // code to animate in view
  const [ref , inview ]=useInView();

  return (
    <div className='projects' ref={ref}>

      

      <div className="projectitem__container" >
      <Swiper className="mySwiper"  parallax={true}   modules={[Parallax]} speed={800} onSwiper={(swiper) => setactiveindex(swiper.activeIndex+1)}
      onSlideChange={(swiper) => setactiveindex(swiper.activeIndex+1)} >

          {projectdata.map((dta,ind)=>{return<SwiperSlide key={ind}> <Projectitem  img={dta.img} title={dta.title} subtitle={dta.subtitle} csbtn={<Link style={{textDecoration:"none",color:"#fff"}} to={dta.url}>READ CASE STUDY</Link>}/></SwiperSlide>  })}

      </Swiper>
      </div>
      
      
      
      <div className={inview?"projects__footer active":"projects__footer"} >
        <div></div>
        <div className="projects__dragtext">drag &#8594;</div>
        <div className="projects__count">PROJECT  {activeindex} of {projectdata.length}</div>
      </div>
      
    </div>
  )
}


// mobile version
const ProjectsApp=()=>{
 


  return (
    <div className='projects'>

      

      <div className="projectitem__container">
      

          {projectdata.map((dta,ind)=>{return <Projectitem key={ind} activeindex={ind+1+".  "} img={dta.img} title={dta.title} subtitle={dta.subtitle} csbtn={<Link style={{textDecoration:"none",color:"#fff"}} to={dta.url}>READ CASE STUDY</Link>}/>  })}

  
      </div>
      
    </div>
  )
}

export default function Projects() {

  const {width}=useWindowSize();



  return(

      <>
      {width<=1000?<ProjectsApp/>:<ProjectsWeb/>}
      </>


  )

}
