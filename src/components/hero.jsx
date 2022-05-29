import React, { useState } from 'react';
import hoverimg1 from "../media/hoverimg1.png"
import hoverimg2 from "../media/hoverimg2.png"
import hoverimg3 from "../media/hoverimg3.png"
import hoverimg4 from "../media/hoverimg4.png"
import useMousePosition from "../hooks/useMousePosition";




export default function Hero() {

const {x , y}=useMousePosition();
const [isactive,setactive]=useState(-1);











 return (
    <div className="hero"  >

        <div className="hero__intro" >
        
            <p> <span onMouseEnter={()=>{ setactive(0)}}  onMouseLeave={()=>{ setactive(-1)}}>Ishika  <img   style={isactive===0? {transform:`translate(${x/-30}% , ${y/-30}%)`,traansition:'transform 1s ease-in'} :  {transform:"translate(0 , 0)"}} className={isactive===0 ? "active" : ""} src={hoverimg1} alt="hoverimg" /> </span>  is a <span onMouseEnter={()=>{ setactive(1)}}  onMouseLeave={()=>{ setactive(-1)}}>UX and Visual Designer<img   style={isactive===1? {transform:`translate(${x/-10}% , ${y/-10}%)`,traansition:'transform 1s ease-in'} :  {transform:"translate(0 , 0)"}} className={isactive===1 ? "active" : ""} src={hoverimg2} alt="hoverimg" /> </span>  who</p> 
      
            <p>creates experiences that are </p>
          
            <p><span  onMouseEnter={()=>{ setactive(2)}}  onMouseLeave={()=>{ setactive(-1)}}>creative  <img   style={isactive===2? {transform:`translate(${x/-10}% , ${y/-80}%)`,traansition:'transform 1s ease-in'} :  {transform:"translate(0 , 0)"}} className={isactive===2 ? "active" : ""} src={hoverimg3} alt="hoverimg" /> </span>  but <span  onMouseEnter={()=>{ setactive(3)}}  onMouseLeave={()=>{ setactive(-1)}}>human-centric <img   style={isactive===3? {transform:`translate(${x/-50}% , ${y/50}%)`,traansition:'transform 1s ease-in'} :  {transform:"translate(0 , 0)"}} className={isactive===3 ? "last active" : "last"} src={hoverimg4} alt="hoverimg" /> </span> </p>

        </div>

        

       
        
       
        
        


    </div>
  )
}
