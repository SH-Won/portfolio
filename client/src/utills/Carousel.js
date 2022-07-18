import React,{useRef,useState,useEffect} from 'react'
import style from '../styles/Carousel.module.css';
//이미지 캐러셀

const Carousel = ({carouselImages}) => {
    const slider = useRef();
    const [images,setImages]=useState([...carouselImages]);
    const [direction,setDirection]=useState(null);
    const dirRef = useRef(null);
    
    useEffect(()=>{
     slider.current.style.width = `${100 * images.length}%`
     
     for(let i=0; i<images.length; i++){
        slider.current.children[i].style.paddingTop = `${68 / images.length}%`
       // slider.current.children[i].style.flex = `1 0 ${100 /images.length}%`
     }

    },[])
    useEffect(() => {

    },[])
    
    
    function prev(){
        // 12345 => 23451 => 12345
        const {current} = slider;
        console.log("images",images)
        if(direction === 1 || direction === null){
        current.append(current.firstChild)
        }
        //23451 => 34512 => 23451
       
        //setImages(images => [...images.slice(1,images.length).concat([images[0]])])
       
        console.log('1');
        
        setDirection(0);
        
        dirRef.current = 0;
        current.parentElement.style.justifyContent='flex-end'
        current.style.transform=`translateX(${100 / images.length}%)`
        current.style.transition='transform 1s cubic-bezier(0.6, 0.35, 0, 1.04)';
        // setImages(images=>[images[images.length-1]].concat(images.slice(0,images.length-1)))
        
    }
    function next(){
        const {current} =slider;
       
            if(direction === 0){
            current.prepend(current.lastChild);
            }
        setDirection(1);
        dirRef.current = 1;
        
        current.parentElement.style.justifyContent='flex-start';
        current.style.transform =`translateX(-${100 /images.length}%)`
        current.style.transition ='transform 1s cubic-bezier(0.6, 0.35, 0, 1.04)'
        // setImages(images =>[...images.slice(1,images.length).concat([images[0]])]);
        
    }
    function transitionEnd(){
        const {current}=slider;
        // console.dir(current);
        
        if(direction === 1){
        console.log('direction 1');
        setImages(images =>[...images.slice(1,images.length).concat([images[0]])]);
        }
        // 23451 => 34512
         else{
        console.log('direction 0');
        setImages(images=>[images[images.length-1]].concat(images.slice(0,images.length-1)))
        
          //setImages(images =>[])
         }
         // 비동기로 slider current transition 을 none 하지않으면
         // setImage가 실행되기전에 transform 되기 이전의 이미지 순서로 보여지기때문에
         // 버튼을 눌러도 이전 이미지가 한번 깜빡거림
         setTimeout(()=>{
            current.style.transition='none';
            current.style.transform=''
         },0);

    }
    return (
        <div className={style.wrap}>

        <div className={style.container}>
            <div className={style.carousel} >

                <div className={style.slider} ref={slider} onTransitionEnd={transitionEnd}>
                {images.map((image,index)=>(
                    <div key={index} className={style.item}>
                        <img src={image} />
                    </div>
                ))}
                </div>

                <span className={style.prev} onClick={prev}>◀</span>
                <span className={style.next} onClick={next}>▶</span>

            </div>
            
        </div>
         
        </div>
    )
}

export default Carousel
