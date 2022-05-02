import React, { useState , useEffect } from 'react';



const useMousePosition=()=>{
  const [mousePosition,setmousePosition]=useState({x : 0 , y : 0});

  useEffect(() => {

      const updatemousePosition =(event)=>{
        setmousePosition({x : event.clientX , y : event.clientY})
      }



    window.addEventListener('mousemove', updatemousePosition)
  
    return () => {
      window.removeEventListener('mousemove', updatemousePosition)
    }
  }, [])
  

  return mousePosition;
}


export default function Projectitem({title,subtitle,img}) {

  const {x , y}=useMousePosition();
  const [isactive,setactive]=useState(false);
  return (
    <div className='project_item' onMouseEnter={()=>{setactive(true)}} onMouseLeave={()=>{setactive(false)}}>
        <div className="project_item_title">
            <h1 style={isactive? {opacity:"1"} : null}>{title}</h1>
            <p style={isactive? {opacity:"1"} : null}>{subtitle}</p>
        </div>
        <div className={`project_item_img ${isactive? "isactive" : ""}`} style={isactive? {transform:`translate(${x/20}% , ${y/20}%)`} :  {transform:"translate(0 , 0)"}}>
            <img src={img} alt="" />
        </div>
        <div className="project_item_divider">
<hr />
        </div>
    </div>
  )
}
