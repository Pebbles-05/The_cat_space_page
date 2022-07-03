import {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Nextprojectbtn({prevpath,prevbtn,nextpath,nextbtn}) {



  return (
    <div className='nextprojectbtn' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
      <div style={!prevbtn ? {display:"none"} : {display:"block"}}><Link to={prevpath} > <p>{"<<"}  PREV CASE STUDY</p>  </Link>  </div>
      <div style={!nextbtn ? {display:"none"} : {display:"block"}}> <Link to={nextpath} > <p>NEXT CASE STUDY  {">>"}</p>  </Link>   </div>
      
       
    </div>
  )
}
