import { useState , useEffect  } from "react";

const useMousePosition=()=>{
    const [mousePosition,setmousePosition]=useState({x : 0 , y : 0});
  
    useEffect(() => {
  
        const updatemousePosition =(event)=>{
          setmousePosition({x : event.clientX , y : event.clientY})
        }
  
  
  
      window.addEventListener('mousemove', updatemousePosition)
    
      return () => {
        window.removeEventListener('mousemove', updatemousePosition)
      }
    }, [])
    
  
    return mousePosition;
  }

  export default useMousePosition;