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
        <div className="intro__explain">
               <h1>안녕하세요 원성호 입니다</h1>
               <p>같은 화면의 결과를 보여주는 방법은 여러가지 입니다
                  하지만 더 나은 방법은 항상 존재 한다고 생각합니다
                  저는 더 나은 방법을 계속 고민합니다.
               </p>
           </div>
    </section>
  )
}

export default Intro