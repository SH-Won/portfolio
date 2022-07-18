import React from 'react';
import Carousel from '../utills/Carousel';
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
    const information = () => {
        return <ol className ="information">
            {project.information.map((info,index) => (
              <li key={index}>{info}</li>
            ))}
        </ol>
    }
    const onClickHandler = (e) =>{
      console.log(e.target.tagName)
       if(e.target.tagName !== 'svg' && e.target.tagName !=='path') return;
      //  console.log(e.target.closest('li').className);
      const prop = e.target.closest('li').className;
       window.open(project[prop])
    }
    return (
      <article className="project-card" key={project._id}>
        <Carousel carouselImages={project.url} />
        <section className="project-card-explain">
          <h1>{project.title}</h1>
          <span>{project.explain}</span>
          {information()}
          {tools()}
          <ul className="link-list" onClick={onClickHandler}>
            <li className="github"><GitSVG color={'whitesmoke'}/></li>
            {project.link !=='' && <li className="link"><Site/></li>}
          </ul>
        </section>
      </article>
    );
}

export default ProjectItem