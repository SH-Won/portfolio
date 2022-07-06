import React from 'react'
import Carousel from '../utills/carousel'
import GitSVG from '../svg/GitSVG';
import Site from '../svg/Site';


const ProjectItem = ({project}) => {

    const tools = () =>{
        return <ul className="toolList">
            {project.tools.map((tool,index) => (
                <li key={tool+index}>{tool}</li>
            ))}
        </ul>
    }
    const onClickHandler = (e) =>{
      console.log(e.target.tagName)
       if(e.target.tagName !== 'svg' && e.target.tagName !=='path') return;
      //  console.log(e.target.closest('li').className);
      const prop = e.target.closest('li').className;
       window.open(project[prop])
    }
    return (
      <div className="project-card" key={project._id}>
        <Carousel carouselImages={project.url} />
        
        <div className="project-card-explain">
          <h1>{project.title}</h1>
          <p>{project.explain}</p>
          {tools()}
          <ul className="link-list" onClick={onClickHandler}>
            <li className="github"><GitSVG color={'whitesmoke'}/></li>
            {project.link !=='' && <li className="link"><Site/></li>}
          </ul>
        </div>
      </div>
    );
}

export default ProjectItem