import { projects } from '../datas/Data';
import '../styles/project.css';
import React from 'react';
import useScrollEvent from '../hook/useScrollEvent';
import ProjectItem from './ProjectItem';

 const Project = () =>{
     const scrollRef = useScrollEvent('up');
     console.log('project');
    return (
        <div className="project-container" {...scrollRef}>
            <h2 style={{textAlign:'center'}}>프로젝트</h2>
            <div className="project-card-container" >
            {projects.map(project=>( <ProjectItem key={project._id} project={project}/>
            ))}
            </div>
            
        </div>
    )
 }
 export default Project