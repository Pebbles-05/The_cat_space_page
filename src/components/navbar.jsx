import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
           <div className="ham_stick1"></div>
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
              <li onClick={handleactive} className={isactive ? 'active' : null} style={ isactive?   {transition:`opacity .2s ease-in ${1/7+0.1}s,font-size 0.2s ease-in`} : null}> <HashLink  to='/#hero'>Home</HashLink></li>
              <li onClick={handleactive} className={isactive ? 'active' : null} style={ isactive?   {transition:`opacity .2s ease-in ${2/7+0.1}s,font-size 0.2s ease-in`} : null}> <HashLink  to="/#projects">Projects</HashLink></li>
              <li onClick={handleactive} className={isactive ? 'active' : null} style={ isactive?   {transition:`opacity .2s ease-in ${3/7+0.1}s,font-size 0.2s ease-in`} : null}> <HashLink  to="/#reviews">Reviews</HashLink></li>
              <li onClick={handleactive} className={isactive ? 'active' : null} style={ isactive?   {transition:`opacity .2s ease-in ${4/7+0.1}s,font-size 0.2s ease-in`} : null}> <Link  to="about">About Me</Link></li>
             
             </ul>

                <ul className={`dropdown_socials  ${isactive ? 'active': ""}`}    style={ isactive?   {transition:`opacity 0.5s ease-in ${5/7+0.1}s`} : null}>
              <li onClick={handleactive}><a href="#"><img src={linkdinimg} alt="" /></a></li>
              <li onClick={handleactive}><a href="#"> <img src={dribbleimg} alt="" /></a></li>
              <li onClick={handleactive}><a href="#"><img src={instaimg} alt="" /></a></li>
            </ul>

              
            </div>
           
    </div>
  )
}
