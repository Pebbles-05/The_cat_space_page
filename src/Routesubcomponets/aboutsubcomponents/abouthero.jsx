import {useState,useEffect} from 'react';

export default function Abouthero() {
  


  const [scroll, setScroll] = useState(0);

  useEffect(() => {
  
      let progressBarHandler = () => {
          
          const totalScroll = document.documentElement.scrollTop;
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scroll = `${totalScroll / windowHeight}`;
          
          setScroll(scroll);
      }
     
  
      window.addEventListener("scroll", progressBarHandler);
  
      return () => window.removeEventListener("scroll", progressBarHandler);
  },[]);
 
  



  return (
    <div className='abouthero'>
        <div className="abouthero__profile">
          <div className="bg" data-aos="fade-up" data-aos-duration="500" data-aos-once="true"> <img loading='eager' style={{transform:`translateY(${scroll * -150}%)`}} src="https://ik.imagekit.io/thecatspace/catspace_media/testing/abtest.png" alt="profilebg" /></div>
            
            <div className='pp'  > <img data-aos="fade" data-aos-duration="1000" data-aos-once="true" src="https://ik.imagekit.io/thecatspace/catspace_media/hoverimg1.png" alt="profilepic" /></div>
        </div>

      <div className="abouthero__bio"><p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Hi I am Ishika a UX and Visual designer based in India. I started learning UX almost a year back from a course in Internshala and I instantly fell in love with it.</p></div>

    </div>
  )
}
