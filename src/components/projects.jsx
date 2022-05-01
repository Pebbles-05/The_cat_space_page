import React from 'react';
import Projectitem from './projectitem';

export default function Projects() {
  return (
    <div id='projects'>
      <h1 className="projects_header">My Projects</h1>
<div className="project_list">
    <Projectitem />
    
    <Projectitem />
    
    <Projectitem />
 
</div>

    </div>
  )
}
