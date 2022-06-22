import React from 'react';
import mailimg from "../media/mailimg";
import { Mailform } from './mailform';

export default function mail() {
  return (
    <div className='mail'>

      <div className="mail__img" data-aos="fade-up" data-aos-duration="800" >{mailimg}</div>
      <div className="mail__form_container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600"> <Mailform/></div>
     
      <div className="mail__footer">
        
      </div>


    </div>
  )
}
