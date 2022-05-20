import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import useMousePosition from "../hooks/useMousePosition";



export default function Projectitem({title,subtitle,img,classname}) {

  const {x , y}=useMousePosition();
  const [isactive,setactive]=useState(false);
  return (
    
      <div className={classname} onMouseEnter={()=>{setactive(true)}} onMouseLeave={()=>{setactive(false)}}>
        <div className="project_item_title">
            <h1 style={isactive? {opacity:"1"} : null}>{title}</h1>
            <p style={isactive? {opacity:"1"} : null}>{subtitle}</p>
        </div>
        <div className={`project_item_img ${isactive? "isactive" : ""}`} style={isactive? {transform:`translate(${x/20}% , ${y/20}%)`} :  {transform:"translate(0 , 0)"}}>
            <img src={img} alt="" />
        </div>
       
        
    </div>
   
    
  )
}
