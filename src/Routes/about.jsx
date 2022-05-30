import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  //  inting aos 
useEffect(() => {
  AOS.init();

  
}, [])
  return (
    
     <div data-aos="fade-down" data-aos-duration="2000">this is about</div>

   
  )
}
