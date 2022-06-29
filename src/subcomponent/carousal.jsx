import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination} from "swiper";




export default function Carousal({data,width}) {


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
          {data.map((dta,ind)=>{return <SwiperSlide key={ind}><div className='carousal__img'><img loading='lazy' style={{width:`${width}%`}} src={dta} alt={"carousalimg"+ ind} /></div> </SwiperSlide> })}
        
        
      </Swiper>




  </div>
  
    
  )
}
