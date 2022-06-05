import React from 'react';
import mailimg from "../media/mailimg";
import { Mailform } from './mailform';

export default function mail() {
  return (
    <div className='mail'>

      <div className="mail__img">{mailimg}</div>
      <div className="mail__form_container"> <Mailform/></div>
     
    
    </div>
  )
}
