import project1Webheroimg from "../media/project1Webheroimg.png";
import arrowimg from "../media/arrowimg";
import Responsiveimg from "../subcomponent/responsiveimg";
import project1moodboard1 from "../media/project1moodboard1.png";
import project1moodboard2 from "../media/project1moodboard2.png";
import project1homepage1 from "../media/project1homepage1.png";
import project1homepage2 from "../media/project1homepage2.png";
import project1profilepage1 from "../media/project1profilepage1.png";
import project1profilepage2 from "../media/project1profilepage2.png";
import project1organisation1 from "../media/project1organisation1.png";
import project1organisation2 from "../media/project1organisation2.png";
import project1consultant1 from "../media/project1consultant1.png"
import project1consultant2_1 from "../media/project1consultant2_1.png"
import project1consultant2_2 from "../media/project1consultant2_2.png"
import project1consultant2_3 from "../media/project1consultant2_3.png"
import project1journal1 from "../media/project1journal1.png"
import project1journal2 from "../media/project1journal2.png"
import project1blogscreen1 from "../media/project1blogscreen1.png"
import project1blogscreen2 from "../media/project1blogscreen2.png";



export default function Project1Web() {
  return (
    <div className="project1web">
      {/* //hero */}

      <div className="project1web__hero">
        <div className="project1web__hero_img"><img src={project1Webheroimg} alt="heroimg" /></div>
        <div className="project1web__hero_text"><p className="psec_p">Zifcare is a self development platform which helps users cope up with <span className="psec_pinktext">mental health problems</span>  by providing features like blogs, meditations, digital diary, mood tracking, focus music, contacting an expert and special courses</p> </div>
      </div>

    {/* //goal */}

      <div className="project1web__goal">
        <div className="psec_h">Goal</div>
        <ul>
          <li>
            <p className="psec_p"><span className="psec_pinktext">Redesign</span>  the UI and <span className="psec_pinktext">improve</span> the current UX.</p>
          </li>
          <li>
            <p className="psec_p">Brainstorm to introduce a <span className="psec_pinktext">revenue system </span> for the company.</p>
          </li>
        </ul>
      </div>

    {/* //problems */}

      <div className="project1web__problems">
        <div className="psec_h">PROBLEMS IDENTIFIED</div>
        <ul>
          <li>
            <p className="psec_p"><span className="psec_pinktext">UI inconsistency </span> - inconsistent iconography, padding, texts, cards and buttons </p>
          </li>
          <li>
            <p className="psec_p">The  <span className="psec_pinktext">color pallete</span>  didnt meet the mood of the product</p>
          </li>
        </ul>
      </div>

    {/* research */}

      <div className="project1web__Research">
        <div className="psec_h">USER RESEARCH</div>
        <p className="psec_p">Primary Research - Interviews for primary reasearch were already done by the team. All I summed up the important details like the <span className="psec_pinktext">age range</span>  of the users, <span className="psec_pinktext">favourite features</span>, <span className="psec_pinktext">problems faced while navigating</span> and further <span className="psec_pinktext">expectations</span> from the product.</p>
        <p className="psec_p">Secondary Research - I researched other <span className="psec_pinktext">competitive</span> products like Headspace, ThinkRight, InnerHour and ProactiveforHer</p>
      </div>

    {/* //ideation */}

    <div className="project1tweb_ideation">
        <h1 className="psec_h">IDEATION</h1>
        <p className="psec_p">Mood : <span className="psec_greentext">Calm</span>   - <span className="psec_yellowtext">Happy</span>  - <span className="psec_bluetext">Peaceful</span> </p>

        <p className="psec_p">
            <span className="psec_pinktext">Problem 1 </span> : The users had difficulty while navigating their saved contents
              <br />
            <span className="psec_pinktext">Solution</span> : Make a personalized dashboard
            
        </p>

        <p className="psec_p">
            <span className="psec_pinktext">Problem 2 </span> : The organisation sign-up page didnt motivate firms to sign -up for zifcare 
              <br />
            <span className="psec_pinktext">Solution</span> : Add reasons as to why they should consider mental health seriously and how zifcare could help. Make the sign-up process simple. Make zifcare approachable.
        </p>

        <p className="psec_p">
            <span className="psec_pinktext">Problem 3 </span> : The users often couldnt contact the experts because of clashing schedules
              <br />
            <span className="psec_pinktext">Solution</span> : Create a proper consultation booking process to avoid any conflict
        </p>

        <p className="psec_p">
            <span className="psec_pinktext">Problem 4 </span> : Distinguish between payable and free content in the platform 
              <br />
            <span className="psec_pinktext">Solution</span> : Introduce a GOLD icon to distinguish between paid and non-paid content
        </p>
    </div>

    {/* design process */}

    <div className="project1web__designprocess">
    <h1 className="psec_h">DESIGN PROCESS</h1>
    <div className="project1web__designprocess_steps">
      
      <div> 
        <h1 className="psec_p">Design</h1>
        <p className="psec_pinktext">Fix basic UI</p>
      </div>

      <div className="arrows">
     {arrowimg}
      </div>

      <div> 
        <h1 className="psec_p">Ideate</h1>
        <p className=" psec_pinktext">Brainstorm to find solutions for researched problems</p>
      </div>

      <div className="arrows">
     {arrowimg}
      </div>

      <div> 
        <h1 className="psec_p">Design</h1>
        <p className=" psec_pinktext">Design the solutions ideated</p>
      </div>

      <div className="arrows">
     {arrowimg}
      </div>

      <div> 
        <h1 className="psec_p">Develop</h1>
        <p className="psec_pinktext">Handoff designs and coordinate to perfect</p>
      </div>

      <div className="arrows">
     {arrowimg}
      </div>

      <div> 
        <h1 className="psec_p">Deliver</h1>
        <p className="psec_pinktext">Next steps : usability testing</p>
      </div>



    </div>
    </div>
    

    {/* moodboard */}
    <div className="project1web__moodborad">
            <h1 className="psec_h">MOOD BOARD</h1>
            <p className="psec_p">100% color contrast can be <span className="psec_pinktext">eye straining</span>  specially for people with glasses or aged above 30. Purple and white - the previous color palette - had a color conntrast of 94.1%. Hence to create a calm mood I changed the background to #F3F1F5 while retaining the brand color, making the contrast 80.9%</p>
            <Responsiveimg dta1={project1moodboard1} dta2={project1moodboard2}/>
    </div>

    {/* final screens */}
    <div className="project1web__finalscreens">
      <h1 className="psec_h">FINAL SCREENS</h1>
      <p className="psec_p">I followed the process of <span className="psec_solidpinktext">adaptive design</span> . designed screens for both website and phone</p>



      <p className="psec_p  title"> <span className="psec_solidpinktext">HOME SCREEN</span>  - </p>
          <Responsiveimg dta1={project1homepage1} dta2={project1homepage2} dta2size= {80} />


      <p className="psec_p  title"> <span className="psec_solidpinktext">PROFILE SCREEN </span>- The profile dashboard for making navigation through saved items easy  </p>
          <Responsiveimg dta1={project1profilepage1} dta2={project1profilepage2} />

      <p className="psec_p  title"> <span className="psec_solidpinktext">ORGANIZATION SIGN-UP SCREEN </span>  - </p>

         <Responsiveimg dta1={project1organisation1} dta2={project1organisation2} dta1size={100} dta2size={60} />


      <p className="psec_p  title"> <span className="psec_solidpinktext">BOOKING A CONSULTANT SCREEN </span>  - </p>
     
      <Responsiveimg dta1={project1consultant1}  dta2={project1consultant2_1} dta2size={80}/>
      <Responsiveimg dta1={null}  dta2={project1consultant2_2} isvisible1={true} dta2size={100}/>
      <Responsiveimg dta1={null}  dta2={project1consultant2_3}  isvisible1={true} dta2size={80}/>

      <p className="psec_p  title"> <span className="psec_solidpinktext">JOURNAL ENTRY SCREEN  </span>  -  Checkout the animations like at zifcare.com</p>
      
        <Responsiveimg dta1={project1journal1} dta2={project1journal2}  dta2size={100} />


      <p className="psec_p  title"> <span className="psec_solidpinktext"> BLOG SCREEN </span>  - </p>

       <Responsiveimg dta1={project1blogscreen1} dta2={project1blogscreen2}   />

      <p className="psec_p  title"> I re-designed the rest of the screens following the style guide I defined. No major changes were required.  </p>
    </div>

    {/* nextsteps*/}
    <div className="project1web__nextsteps">

      <h1 className="psec_h">NEXT STEPS</h1>
        <ul>
          <li>
            <p className="psec_p">Evaluate the current prototype with the potential users by conducting <span className="psec_pinktext">usability test</span> </p>
          </li>
          <li>
            <p className="psec_p">Ideate solutions to make it <span className="psec_pinktext">accessible by the disabled </span> commuters to make the app scalable</p>
          </li>
          <li>
            <p className="psec_p">Explore options to enhance the current <span className="psec_pinktext">revenue system</span> </p>
          </li>
        </ul>
    </div>

    {/* conclusion */}

    <div className="project1web_conclusion">
      <h1 className="psec_h">CONCLUSION</h1>
      <p className="psec_p">Zifcare not only ensures users to understand the problems they are dealing with but also provide features to deal with it. The redesign resulted in the <span className="psec_pinktext">increase of traffic by 60%</span> </p>
    </div>


 

    </div>
  )
}
