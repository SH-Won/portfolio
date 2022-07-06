import { projects } from '../datas/Data';
import '../styles/project.css';
import React from 'react';
import useScrollEvent from '../hook/useScrollEvent';
import ProjectItem from './ProjectItem';

 const Project = () =>{
     const scrollRef = useScrollEvent('up');
     console.log('project');
    return (
        <section className="project-container">
            <h2 style={{textAlign:'center'}}>프로젝트</h2>
            <section className="project-card-container" {...scrollRef}>
            {projects.map(project=>( <ProjectItem key={project._id} project={project}/>
            ))}
            </section>
            
        </section>
    )
 }
 export default Project