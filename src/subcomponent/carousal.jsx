import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination} from "swiper";




export default function Carousal({path,num,width}) {


 return (
          <div className="Carousal">
      <Swiper
        // centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
          {num.map((num,ind)=>{return <SwiperSlide key={ind}><div className='carousal__img'><img loading='lazy' style={{width:`${width}%`}} src={`https://ik.imagekit.io/thecatspace/catspace_media/${path + num}.png`} alt={"carousalimg"+ ind} /></div> </SwiperSlide> })}
        
        
      </Swiper>




  </div>
  
    
  )
}
