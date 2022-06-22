import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import reviewdata from "../../utils/reviewdata";



function ReviewItem({img,title,subtitle,review}) {

return (
        <>
        <div className='reviewitemApp'>
          {img}
          <h1>{title}</h1>
          <p className='subtitle'>{subtitle}</p>
    
        <p className='review'>{review}</p>
            
        </div>
       
    
        </>
        
      )
    }
    


export default function ReviewitemApp() {
  return (
    <div className='reviewitemApp__container'>

<Swiper
        // centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
         {reviewdata.map((dta,ind)=>{
              return <SwiperSlide key={ind}> <ReviewItem   img={dta.img} title={dta.title} subtitle={dta.subtitle} review={dta.review}  /></SwiperSlide> 
            })}
        
        
      </Swiper>



    </div>
  )
}
