import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Mailform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_u17k1wz', 'template_58skrae', form.current, 'iRVS9w9Pplj8sJMc2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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
            <input  type="submit" value="Send" />
        </div>
      
    </form>
  );
};