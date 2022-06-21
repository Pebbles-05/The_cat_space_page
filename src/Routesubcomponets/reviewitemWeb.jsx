import {useState} from 'react';
import reviewdata from "../utils/reviewdata";

 function ReviewItem({ind,img,title,subtitle,review}) {

const [modal, setmodal] = useState(false);
const [alignment, setalignment] = useState({});

const handleModal= ()=>{
 setmodal(!modal);


switch (ind) {
  case 0:
    setalignment({justifyContent:"flex-start"})
    break;
  case 1:
    setalignment({justifyContent:"center"})
    break;
  case 2:
    setalignment({justifyContent:"flex-end"})
    break;

  default:
    ()=>{
      return null;
    }
    break;
}
}


if(modal){
  document.body.classList.add("active");
}else{
  document.body.classList.remove("active");
}


return (
    <>
    <div className='reviewitemWeb'>
      {img}
      <h1>{title}</h1>
      <p>{subtitle}</p>

      <button onClick={handleModal}>READ</button>
        
    </div>

    {modal &&  <div className='modal' style={alignment}>
                    

                    <div className="modal__overlay" onClick={handleModal}></div>

                    <div className="modal__text">

                        <p>{review}</p>
                    </div>


</div>}
   

    </>
    
  )
}


export default function ReviewitemWeb(){
  return(
    <>
      <div className="reviewitemWeb__container">

            {reviewdata.map((dta,ind)=>{
              return <ReviewItem key={ind} ind={ind} img={dta.img} title={dta.title} subtitle={dta.subtitle} review={dta.review}  />
            })}
          
        </div>

        
    
    </>
  )
}