import Dreamabout from "../Routesubcomponets/dreamabout";
import Reviews from "../Routesubcomponets/reviews";
import Aboutfooter from "../Routesubcomponets/aboutfooter";
import Creditfooter from "../subcomponent/creditfooter";




export default function About() {


  return (
    
     <div className='about'>

      <Dreamabout />
      <Reviews/>
      <Aboutfooter/>
      <div className="about__creditfooter"><Creditfooter/></div>
      
   
     </div>

   
  )
}
