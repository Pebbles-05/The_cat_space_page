
import Imagecomp from '../../../subcomponent/imagecomp';

const Hero = () => {
  return (
    <>
      <div className='img-div heroimg-div' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
           
            <Imagecomp   path="p1aheroimg" num={[""]}  className="heroimg" />
     
      </div>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>GOAL</h1>
        <div className='Contents mt-1'>
          <ul className='ml-7 list-disc'>
            <li>
              Redesign the current UI to attain
              <span className='pink-text'> consistency</span> between the app
              and web
            </li>
            <li>
              Brainstorm to introduce a
              <span className='pink-text'> capture user’s email </span>in order
              to remake a fresh database of zifcare app users
            </li>
          </ul>
        </div>
      </div>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>PROBLEMS IDENTIFIED</h1>
        <div className='Contents mt-1'>
          <ul className='ml-7 list-disc'>
            <li>
              <span className='pink-text'>UI inconsistency</span> which includes
              hierarchy, padding and iconography
            </li>
            <li>
              Many important
              <span className='pink-text'> features were absent</span> on the app
            </li>
            <li>
              <span className='pink-text'>GOLD membership</span> pitch screen
              for non-paying members was absent
            </li>
            <li>
              Difficulty in
              <span className='pink-text'> navigation</span>
            </li>
          </ul>
        </div>
      </div>


      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>USER RESEARCH</h1>
        <div className='Contents mt-1'>
          <p className='mb-2'>
            Primary Research -
            <span className='pink-text'> Interviews </span> for primary
            reasearch were already done by the team. I just had to sum up the
            <span className='pink-text'> pain points</span> and{' '}
            <span className='pink-text'>expectations</span> from the user
            interviews
          </p>
          <p className='mt-2'>
            Secondary Research - I researched other
            <span className='pink-text'> competitive</span> products like
            Headspace, ThinkRight, Calm, InnerHour and ProactiveforHer
          </p>
        </div>
      </div>


      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>IDEATION</h1>
        <div className='Contents '>
          <div className='my-2'>
            <p className='mt-2'>
              <span className='pink-text'>Analyse Situation </span> - Most users
              didnt wanted to sign up for an app that they didnt think would be
              useful
            </p>
            <p className='mt-2'>
              <span className='pink-text'>Identify Problem </span> - Signing up
              before using the app was absolutely mandatory for growing the
              community but soo was building trust between users and the
              product.
            </p>
            <p className='mt-2'>
              <span className='pink-text'>Company Constraint </span>- We needed
              emails of existing users for a fresh database to resume sending
              newsletters
            </p>
            <p className='mt-2'>
              <span className='pink-text'>Solution </span> - I designed
              onboarding pages showcasing all the features using phone mockups
              along with input fields to enter user emails. I also placed
              illustrations in profile building screens hinting on the app
              features
            </p>
          </div>
         
          <div className='my-10'>
            <p className='mt-2'>
              <span className='pink-text'>Analyse Situation </span>- Most of the new users werent aware of the full potential of the app or were overwhelmed by the navigation system
            </p>
            <p className='mt-2'>
              <span className='pink-text'>Identify User Problem </span> : The
              app had a bottom nav bar and as well as a hamburger menu, thus
              making navigation overwhelming and scattered
            </p>
            <p className='mt-2'>
              <span className='pink-text'>Solution </span> : I added every
              important feature on one screen - HOME. I made all the important
              features accessible through a bottom navbar
            </p>
          </div>
        </div>
      </div>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>DESIGN PROCESS</h1>
        <div className='Contents mt-1'>
          <p className='mb-2'>I followed the double diamond process</p>
          <div className='img-div my-10'>


          <Imagecomp className="dpimg"  path="placeholder" num={[""]}/>


          </div>
        </div>
      </div>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>USER FLOW</h1>
        <div className='Contents mt-1'>
          <p className='mb-2'>I made the user flow on <span className='pink-text'>figjam</span></p>
          <div className='img-div my-10'>


          <Imagecomp className="ufimg" path="placeholder" num={[""]}/>

          
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
