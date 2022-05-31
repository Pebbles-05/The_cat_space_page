
import Projectitem , {url}  from "./projectitem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax  } from "swiper";
import "swiper/css";
import projectdata  from "../utils/projectdata";
import { Link } from "react-router-dom";




export default function Projects() {
  




  return (
    <div className='projects'>
      
      <Swiper className="mySwiper"  parallax={true}   modules={[Parallax]} speed={800} >

        {projectdata.map((dta,ind)=>{return<SwiperSlide key={ind}> <Projectitem  img={dta.img} title={dta.title} subtitle={dta.subtitle} csbtn={<Link style={{textDecoration:"none",color:"#fff"}} to={dta.url}>READ CASE STUDY</Link>}/></SwiperSlide>  })}
       
      </Swiper>
      
      <div className="projects__footer">
        <div></div>
        <div className="projects__dragtext">drag &#8594;</div>
        <div className="projects__count">PROJECT 2 of 3</div>
      </div>
      
    </div>
  )
}
