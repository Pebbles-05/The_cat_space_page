import React, { useState,useRef,useEffect } from 'react';
import "../subcomponent_styles/carousal.scss";

export default function Carousal({data}) {

    const [stateindex,setstateindex]=useState(0);
    // const[imgsdata,setimg]=useState(data);
    //   const[imgheight,setheight]=useState();
    
    // // checking height of the svg
    
    
    //   const heightRef = useRef();
    
    //   function checkheight(){
    //     const Height = heightRef.current.clientHeight;
    //     setheight(Height)
    //   }
     
    
    // useEffect(() => {
    //   checkheight();
    
      
    // }, [imgsdata])
    
    
    
    
    //  useEffect(() => {
     
    //  window.addEventListener("resize",checkheight);
    
      
    //  }, [])
    
     
     const moveDot = index => {
      setstateindex(index)
    }
    
    
    // autoscrolling functions
    
    let slideInterval;
    const dataLength=data.length;
    const nextSlide = () => {
      setstateindex(stateindex === dataLength - 1 ? 0 : stateindex + 1);
    };
    
    function auto() {
      slideInterval = setInterval(nextSlide, 10000);
    }
    
    useEffect(() => {
     
        auto();
     
        return () => clearInterval(slideInterval);
    }, [stateindex]);
    




  return (
      <>

        <div className="carousal_container" >
{data.map((data, index) => {
        return (
          <div
            className={index === stateindex ? "carousal_item active" : "carousal_item"}
            key={index}
          >
            {index === stateindex && (
              <div >
                {data} 
              
              </div>
            )}
          </div>
        );
      })}
     
</div>
<div className="carousal-dots_container">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    key={index}
                    onClick={() => moveDot(index)}
                    className={stateindex === index? "carousal_dot active" : "dot"}
                    ></div>
                ))}
  </div>
</>
  
    
  )
}
