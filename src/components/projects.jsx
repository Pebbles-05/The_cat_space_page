import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Projectitem from '../subcomponent/projectitem';
import projectdata from '../utils/projectdata';

export default function Projects() {
  
  

  const datalength=projectdata.length;


  return (
    <div id='projects' >
      <h1 className="projects_header">My Projects</h1>
<div className="project_list">

  {projectdata.map((data,index)=>{ return ( <Link style={{textDecoration:"none"}} to={data.route} key={data.id}  >

                                        <Projectitem 
                                          classname={datalength===index+1 ? "project_item noline" : "project_item"}
                                            title={data.title} 
                                            subtitle={data.subtitle} 
                                            img={data.img}   />

  </Link>
                                     
                                          
                                        
                                   )})}
    
</div>

    </div>
  )
}
