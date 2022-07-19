import {useEffect,useRef,useCallback} from 'react'


const useScrollEvent = (direction) => {
    const dom = useRef();
    const handleDirection = (direction) =>{
        
        switch (direction) {
          case "up":
            return "translate3d(0,10%,0)";
          case "down":
            return "translate3d(0,-10%,0)";
          case "left":
            return "translate3d(-10%,0,0)";
          case "right":
             return "translate3d(10%,0,0)";
          default:
            return;
        }
    }
    
    const handleScroll = useCallback(([entry],ob) =>{
        const {current} = dom;
    
        console.log(entry);
        if(entry.isIntersecting){
            console.log(entry);
            current.style.transitionProperty = 'all'
            current.style.transitionDuration = "0.8s"
            current.style.transitionTimingFunction ="linear"
            current.style.opacity = 1
            current.style.transform = "translate3d(0,0,0)"
            ob.unobserve(entry.target)
        }
        

    },[]);

    useEffect(()=>{
        console.log('useScrollEvent');
        let observer;
        const {current} = dom;
        console.log(current);
        
        if(current){
            observer = new IntersectionObserver(handleScroll)
            observer.observe(current);
        }

        return ()=> observer && observer.disconnect();

    },[handleScroll])
    
    return {
        ref:dom,
        style:{ 
            transform:handleDirection(direction),
            opacity:0
        }

    }
}

export default useScrollEvent
