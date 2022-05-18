import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './Routes/about';
import { BrowserRouter , Routes , Route } from "react-router-dom";


function App() {

   





  return <div  className='app'>
    

    <BrowserRouter>
 <Navbar />
 <Routes>
    <Route path="/"  element={<Home />} />
    <Route path="about"  element={<About />} />
 
 </Routes>
  </BrowserRouter>


    

 </div>
}

export default App;
