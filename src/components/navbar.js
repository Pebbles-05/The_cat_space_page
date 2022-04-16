import React, { useState } from 'react';
import catimg  from "../media/cat 1.png";
import dribbleimg  from "../media/dribimg.png";
import instaimg  from "../media/instaimg.png";
import linkdinimg  from "../media/linkdinimg.png";

export default function Navbar() {

  const dropdownlinkdata=["Home","Projects","Reviews","About Me"]

const[isactive,setactive]=useState(false);

const handleactive=()=>{
  setactive(!isactive);

}


  return (
    <div className={`nav_container ${isactive? 'nav_active' : null}`}>
        <nav className='navbar'>
          <div className="ham_container"  onClick={handleactive}>
             <div className={`ham ${isactive? 'nav_active' : null}`}>
           <div className="ham_stick1"  ></div>
           <div className="ham_stick2"></div>
           <div className="ham_stick3"></div>
            </div></div>
           
            <div className='logo'><img src={catimg} alt="" />
            </div>
            <ul className="socials">
              <li>  <a href="#"><img src={linkdinimg} alt="" /></a></li>
              <li><a href="#"> <img src={dribbleimg} alt="" /></a></li>
              <li><a href="#"><img src={instaimg} alt="" /></a></li>
            </ul>
        </nav>
        <div className='dropdown'>
            
            
        <hr />
                <ul className='dropdown_links'>

                  {dropdownlinkdata.map((data,index)=>{ return <li className={isactive ? 'active' : null} style={ isactive?   {transition:`opacity 0.5s ease-in ${index/7+0.1}s`} : null}> {data}</li>})}
                
              
             
                </ul>

                <ul className={`dropdown_socials  ${isactive ? 'active': ""}`}    style={ isactive?   {transition:`opacity 0.5s ease-in ${5/7+0.1}s`} : null}>
              <li><a href="#"><img src={linkdinimg} alt="" /></a></li>
              <li><a href="#"> <img src={dribbleimg} alt="" /></a></li>
              <li><a href="#"><img src={instaimg} alt="" /></a></li>
            </ul>

              
            </div>
           
    </div>
  )
}
