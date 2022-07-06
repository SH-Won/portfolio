import React,{useEffect,useRef} from 'react'
import {loadAnimation} from 'lottie-web'
import animate from 'lottie-web';

const Intro = () => {
   const svgContainer = useRef(null);

   useEffect(()=>{
       loadAnimation({
           container:svgContainer.current,
           renderer:'svg',
           loop:true,
           autoplay:true,
           animationData: require('../datas/laptop.json')
       });
       animate.setSpeed(0.7);
   },[])
   return (
    <section className="intro">
        <div className="svg-container">
           <div className="laptop-svg" ref={svgContainer}></div>
        </div>

    </section>
  )
}

export default Intro