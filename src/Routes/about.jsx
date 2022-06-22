import Abouthero from "../Routesubcomponets/aboutsubcomponents/abouthero";
import Dreamabout from "../Routesubcomponets/aboutsubcomponents/dreamabout";
import Reviews from "../Routesubcomponets/aboutsubcomponents/reviews";
import Aboutfooter from "../Routesubcomponets/aboutsubcomponents/aboutfooter";
import Creditfooter from "../Routesubcomponets/creditfooter";




export default function About() {


  return (
    
     <div className='about'>
      <Abouthero />
      <Dreamabout />
      <Reviews/>
      <Aboutfooter/>
      <div className="about__creditfooter"><Creditfooter/></div>
      
   
     </div>

   
  )
}
