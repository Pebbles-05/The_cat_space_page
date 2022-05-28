import React, { useState ,useRef,useEffect } from 'react';
import useMousePosition from "../hooks/useMousePosition";
import hoverimg from "../utils/hoverimages";



export default function Hero() {

const {x , y}=useMousePosition();
const [isactive,setactive]=useState(-1);

// using state for controling imgdata

const[imgsdata,setimg]=useState(hoverimg);
const[imgheight,setheight]=useState();

// checking height of the images so can fix height of the div
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









 return (
    <div className="hero"  >

        <div className="hero__intro" >
        
            <p> <span onMouseEnter={()=>{ setactive(0)}}  onMouseLeave={()=>{ setactive(-1)}}>Ishika</span>  is a <span onMouseEnter={()=>{ setactive(1)}}  onMouseLeave={()=>{ setactive(-1)}}>UX and Visual Designer</span>  who</p> 
      
            <p>creates experiences that are </p>
          
            <p><span  onMouseEnter={()=>{ setactive(2)}}  onMouseLeave={()=>{ setactive(-1)}}>creative</span>  but <span onMouseEnter={()=>{ setactive(3)}}  onMouseLeave={()=>{ setactive(-1)}}>human-centric</span> </p>

        </div>

        <div className="hero__media">

          {hoverimg.map((img,index)=>{ return <img ref={heightRef } key={index} style={isactive===index? {transform:`translate(${x}px , ${y}px)`,traansition:'transform 1s ease-in'} :  {transform:"translate(0 , 0)"}} className={isactive===index ? "active" : ""} src={img} alt="hoverimg" /> })}
        </div>


    </div>
  )
}
