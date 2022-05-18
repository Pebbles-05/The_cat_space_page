import React, { useState,useRef,useEffect } from 'react';
import reviewdata from "../utils/reviewdata";


export default function Reviews() {

const [stateindex,setstateindex]=useState(0);
const[imgsdata,setimg]=useState(reviewdata);
  const[imgheight,setheight]=useState();

// checking height of the svg


  const heightRef = useRef();

  function checkheight(){
    const Height = heightRef.current.clientHeight;
    setheight(Height)
  }
 

useEffect(() => {
  checkheight();

  
}, [imgsdata])




 useEffect(() => {
 
 window.addEventListener("resize",checkheight);

  
 }, [])

 
 const moveDot = index => {
  setstateindex(index)
}


// autoscrolling functions

let slideInterval;
const dataLength=reviewdata.length;
const nextSlide = () => {
  setstateindex(stateindex === dataLength - 1 ? 0 : stateindex + 1);
};

function auto() {
  slideInterval = setInterval(nextSlide, 5000);
}

useEffect(() => {
 
    auto();
 
    return () => clearInterval(slideInterval);
}, [stateindex]);


// the compotnent 
  return (
    <div id='reviews'>
        <div className="reviews_header">
<p>Dont just take my word for it !</p>
        </div>
<div className="reviews_card_stack" style={{ height:imgheight + "px"}}>
{reviewdata.map((data, index) => {
        return (
          <div
            className={index === stateindex ? "reviews_card active" : "reviews_card"}
            key={index}
          >
            {index === stateindex && (
              <div ref={heightRef}>
                {data} 
              
              </div>
            )}
          </div>
        );
      })}
</div>

  <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    key={index}
                    onClick={() => moveDot(index)}
                    className={stateindex === index? "dot active" : "dot"}
                    ></div>
                ))}
  </div>
</div>
    
  )
}
