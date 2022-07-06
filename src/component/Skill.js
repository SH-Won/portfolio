import React from 'react'
import { skills } from '../datas/Data'
import useScrollEvent from '../hook/useScrollEvent'
import Carousel_3D from '../utills/Carousel_3D'
const Skill = () => {
    const scrollRef = useScrollEvent('right');

  return (
    <section className="container skill" {...scrollRef}>
      <h2 style={{ textAlign: "center" }}>스킬</h2>
      <Carousel_3D images={skills.map((skill) => skill.url)} />
      
      {skills.map(skill =>(
        (skill.title !=='Node' && skill.title !=='Mongo DB') &&
        <article className="info" key={skill.title}>
          <img className ="info__img" src={skill.url} />
          <div className="info__explain">
            {skill.explain}
          </div>
        </article>
      ))}
    </section>
  );
}

export default Skill