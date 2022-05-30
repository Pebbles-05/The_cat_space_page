
import Projectitem  from "./projectitem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax  } from "swiper";
import "swiper/css";



export default function Projects() {
  




  return (
    <div className='projects'>
      
      <Swiper className="mySwiper"  parallax={true}   modules={[Parallax]} speed={800} >
        <SwiperSlide ><Projectitem/></SwiperSlide>
        <SwiperSlide><Projectitem/></SwiperSlide>
        <SwiperSlide><Projectitem/></SwiperSlide>
      </Swiper>
      

      
    </div>
  )
}
