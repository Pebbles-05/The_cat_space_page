import React from 'react';
import footerimg from "../media/footer"

export default function Footer() {
  return (
    <div className='footer'>
            <div className="footer_greet">
                <span> I am always happy to make new friends, take up new challenges and talk about design</span>
           
                <span>Drop me a mail at,</span>
            
                <span className='footer_greet_purpletext'>ishika.workspace@gmail.com</span>
            
                <span>and I will get back to you asap !</span>
            
            </div>
            <div className="footer_downloadbtn">
                <a href="#">Download my Resume</a>
            </div>

            <div className="footerimg">
            {footerimg}
            </div>
            
    </div>
  )
}
