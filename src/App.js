import { useEffect,useState } from "react";
import "./styles/app.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from "./components/Loader";
import Blob from "./components/blob"
import Navbar from './components/navbar';
import Home from './components/home';
import About from './Routes/about';
import Mail from "./Routes/mail";
import Resume from "./Routes/resume";
import Project1 from "./Routes/project1";
import Project2 from "./Routes/project2";
import Project3 from "./Routes/project3";
import Project4 from "./Routes/project4";
import ScrollToTop from "./subcomponent/ScrollToTop";
import { BrowserRouter , Routes , Route } from "react-router-dom";



const Main =()=>{


   return (
   <div  className='app'>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>

        <Routes>
      
      <Route path="/"  element={<Home />} />
      <Route path="about"  element={<About />} />
      <Route path="mail"  element={<Mail />} />
      <Route path="resume"  element={<Resume />} />
      <Route path="project_zifcare"  element={<Project1 />} />
      <Route path="project_Personal_Portfolio_Design"  element={<Project2 />} />
      <Route path="project_Ethernals_HACKATHON_2022"  element={<Project3 />} />
      <Route path="project_wiggle_app_design"  element={<Project4 />} />

      </Routes>
        </ScrollToTop>

        
    </BrowserRouter>
   </div> 

   )
}


function App() {


//  preloader function
   const [isloading,setLoading]=useState(false);

   useEffect(() => {
      setLoading(true)
    
      setInterval(() => {
         setLoading(false)
         
      }, 1800);
     
   }, [])
   
   
   //  inting aos 
  useEffect(() => {
   AOS.init({offset:200});
 
   
 }, [])

   return  (
      <>
       {isloading ? <Loader /> :<><Main/><Blob/></> }
       
       </>
      
    

   )
 
}

export default App;
