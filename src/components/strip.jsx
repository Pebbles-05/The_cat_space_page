import React from 'react';
import stripimg1 from "../media/strip1.png";
import stripimg2 from "../media/strip2.png";

export default function Strip() {
  return (
    <div className='strip'>
<img src={stripimg1} alt="illustration" />
<img src={stripimg2} alt="illustration" />
    </div>
  )
}
