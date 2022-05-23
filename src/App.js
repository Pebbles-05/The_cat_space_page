import "./styles/home.css";
import "./styles/projectbranch.css"
import Navbar from './components/navbar';
import Home from './components/home';
import About from './Routes/about';
import Project1 from "./Routes/project1";
import Project2 from "./Routes/project2";
import Project3 from "./Routes/project3";
import { BrowserRouter , Routes , Route } from "react-router-dom";


function App() {

   return <div  className='app'>
    <BrowserRouter>
 <Navbar />
 <Routes>
    
    <Route path="/"  element={<Home />} />
    <Route path="about"  element={<About />} />
    <Route path="project_zifcare"  element={<Project1 />} />
    <Route path="project_Personal_Portfolio_Design"  element={<Project2 />} />
    <Route path="project_Ethernals_HACKATHON_2022"  element={<Project3 />} />
 
 </Routes>
  </BrowserRouter>


    

 </div>
}

export default App;
