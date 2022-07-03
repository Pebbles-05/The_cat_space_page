import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Mailform = () => {
  const form = useRef();
  const [submitText,setsubmitText]=useState(false);
  const [checkerror,setcheckerror]=useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const checkerror=()=>{
        if(e.target[0].value==="" && e.target[1].value==="" && e.target[2].value===""){
            setcheckerror(true);
        }else if(e.target[0].value==="" && e.target[1].value===""){
            setcheckerror(true);
        }else if(e.target[1].value==="" && e.target[2].value===""){
            setcheckerror(true);
        }else if(e.target[0].value==="" && e.target[2].value===""){
            setcheckerror(true);
        }else if(e.target[0].value==="" || e.target[1].value==="" || e.target[2].value==="" ){
            setcheckerror(true);
        }else{
            setcheckerror(false);
        }
    }
    

    if(e.target[0].value==="" && e.target[1].value==="" && e.target[2].value===""){
        console.log("error");
        setcheckerror(true);
    }else if(e.target[0].value==="" && e.target[1].value===""){
        console.log("error");
        setcheckerror(true);
    }else if(e.target[1].value==="" && e.target[2].value===""){
        console.log("error");
        setcheckerror(true);
    }else if(e.target[0].value==="" && e.target[2].value===""){
        console.log("error");
        setcheckerror(true);
    }else if(e.target[0].value==="" || e.target[1].value==="" || e.target[2].value==="" ){
        console.log("error");
        setcheckerror(true);
    }
     else{
        emailjs.sendForm('service_3eyxy0j', 'template_qaz0fs8', form.current, '_iO-hLBhpJ7YrEauM')
        .then((result) => {
            setsubmitText(true);
            checkerror();
        }, (error) => {
            console.log(error.text);
        });
    }
  
      
  };


  return (
    <form className='emailform' ref={form} onSubmit={sendEmail}>
        <div className='emailform__name'>
            <label>Name</label>
            <input type="text" name="user_name" />
        </div>
        <div className='emailform__email'>
            <label>Email</label>
            <input type="email" name="user_email" />
        </div>
        <div className="emailform__message">
            <label>Drop me a line, honestly anything !</label>
            <textarea name="message" />
        </div>
        <div className="emailform__submitbtn">
            <input className={submitText? "active" : null} type="submit" value={submitText?"GOT IT !":"Send"} />
        </div>
        <div className='errortext'>{!checkerror? null : "*please fill all the sections"}</div>
    </form>
  );
};