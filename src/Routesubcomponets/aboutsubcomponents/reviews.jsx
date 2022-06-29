import React from 'react';
import ReviewitemWeb from "./reviewitemWeb";
import ReviewitemApp from './reviewitemApp';
import useWindowSize from "../../hooks/useWindowSize";


export default function Reviews() {

const size = useWindowSize();


  return (
    <div className='reviews' >

        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">PAT ON THE BACK</h1>

        {size.width<=800 ? <ReviewitemApp /> : <ReviewitemWeb />}

        
    </div>
  )
}
