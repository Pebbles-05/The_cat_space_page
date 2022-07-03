import React, { useState ,useEffect} from 'react';
import sttbtn from '../media/sttbtn';

export default function Scrolltotopbtn() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 500) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);
  
    // This function will scroll the window to the top 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    };
  

  return (
    <div className='scrolltotopbtn' data-aos="fade" data-aos-duration="2000" data-aos-offset="0" data-aos-once="false">
             {showButton && (
        <button onClick={scrollToTop} >
          {sttbtn}
    
        </button>
      )}
    </div>
  )
}
