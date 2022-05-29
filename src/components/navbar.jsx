import { useState } from "react";
import  logo from "../media/logo.png" ;
import { Link } from "react-router-dom";
import navlinksList from "../utils/navlinksList";
import socialimg1 from "../media/socialimg1.png"
import socialimg2 from "../media/socialimg2.png"



export default function Navbar() {

  const  [active, setactive] = useState(false);

  const handleActive=()=>{
    setactive(!active);
  }

 
  return (
    <div className="navbar" >
      <Link onClick={()=>{setactive(false)}} style={{textDecoration:"none"}} to="/"><div className="navbar__logo"><img src={logo} alt="logo" /></div></Link>
        

        <ul className={active ? "navbar__links active" : "navbar__links"}>

          {navlinksList.map((dta,index)=>{
          return <Link key={index} onClick={handleActive} style={{textDecoration:"none"}} to={dta.url}><li style={ active ? {transition:`opacity 0.6s ease ${index/4 + 0.1}s`} : null}>{dta.name}</li> </Link>
          })}
       
          <li style={ active ? {transition:`opacity 0.6s ease ${3/4 + 0.1}s`} : null} className="navbar__socials">
              <a href=""><img src={socialimg1} alt="socials" /></a>
              <a href=""><img src={socialimg2} alt="socials" /></a>
          </li>
    
    
         
      
        </ul>   

        <div className={active ? "navbar__ham active" : "navbar__ham"}  onClick={handleActive}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}
