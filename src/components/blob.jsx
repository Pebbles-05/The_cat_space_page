import {useState,useEffect,useRef} from 'react';
import useMousePosition from '../hooks/useMousePosition';
import useWindowSize from "../hooks/useWindowSize";

export default function Blob() {

  const windowsize = useWindowSize();

// using state for controling imgdata
const[dimensions,setdimensions]=useState({height:0,width:0});

// checking height of the images so can fix height of the div
const dimRef = useRef();

function checkdimensions(){
  const Height = dimRef.current.clientHeight;
  const Width = dimRef.current.clientWidth;
  setdimensions({height:Height,width:Width})
}


useEffect(() => {
checkdimensions();


}, [])




useEffect(() => {

    window.addEventListener("resize",checkdimensions);
}, [])
  

const {x,y}=useMousePosition();





  return (
    <div ref={dimRef} className='cursor__blob' style={windowsize.width>=1000 ? {left:`${ x - dimensions.width /2}px`,top:`${y-dimensions.height/2}px`,transform:'scale(1)'} : {left:"0",top:"0",transform:'scale(0)'}}>


    </div>
  )
}
