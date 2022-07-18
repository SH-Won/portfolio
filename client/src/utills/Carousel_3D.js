import React from 'react';
import {useEffect,useRef} from 'react';
import style from '../styles/Carousel3d.module.css';

const Carousel_3D = ({images}) =>{
    const carousel = useRef();
    useEffect(()=>{
        const width = carousel.current.offsetWidth;
        const angle = 360 / images.length;
        const calcZ = width * Math.sqrt(3) / 2 + 30;
        
        for(let i=0; i<images.length; i++){
            carousel.current.children[i].style.transform =`
            rotateY(${angle*i}deg) translateZ(${calcZ}px) scale(1)
            `
            carousel.current.children[i].style.opacity = '1';
        }
    },[images]);
    
    return (
        <div className={style.stage}>
            <div className={style.carousel} ref={carousel}>
                {images.map(image => 
                <div className={style.panel} key={image+"1"}>
                    <img src={image}/>
                </div>    
                )}
            </div>
        </div>
    )
    
}
export default Carousel_3D;