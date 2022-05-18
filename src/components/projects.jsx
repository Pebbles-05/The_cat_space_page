import React from 'react';
import Projectitem from './projectitem';
import projectdata from '../utils/projectdata';

export default function Projects() {


  return (
    <div id='projects' >
      <h1 className="projects_header">My Projects</h1>
<div className="project_list">

  {projectdata.map(data=>{ return  <Projectitem key={data.id}  title={data.title} subtitle={data.subtitle} img={data.img}   />})}
    
</div>

    </div>
  )
}
