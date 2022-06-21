import { useState } from "react";
import  logo from "../media/logo.png" ;
import { Link } from "react-router-dom";
import navlinksList from "../utils/navlinksList";




export default function Navbar() {

  const  [active, setactive] = useState(false);

  const handleActive=()=>{
    setactive(!active);
  }

  if(active){
    document.body.classList.add("active");
  }else{
    document.body.classList.remove("active");
  }
  

 
  return (
    <div className="navbar" data-aos="fade-in" data-aos-duraton="1000"   data-aos-offset="0">
      <Link onClick={()=>{setactive(false)}} style={{textDecoration:"none"}} to="/"><div className="navbar__logo"><img src={logo} alt="logo" /></div></Link>
        

        <ul className={active ? "navbar__links active" : "navbar__links"}>

          {navlinksList.map((dta,index)=>{
          return <Link key={index} onClick={handleActive} style={{textDecoration:"none"}} to={dta.url}><li style={ active ? {transition:`opacity 0.6s ease ${index/16 + 0.1}s`} : null}>{dta.name}</li> </Link>
          })}
    
    
         
      
        </ul>   

        <div className={active ? "navbar__ham active" : "navbar__ham"}  onClick={handleActive}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}
