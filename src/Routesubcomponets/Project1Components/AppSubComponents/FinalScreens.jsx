import Imagecomp from '../../../subcomponent/imagecomp';

const FinalScreens = () => {

  const num6=[1,2,3,4,5,6];
  const num3=[1,2,3];




  return (
    <>
      <div className='my-7'>
        <h1 className='Headings' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">FINAL SCREENS</h1>
        <div className='Contents mt-1'>
          <p className='fsheading' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true" >
            <span className='pink-text'>ONBOARDING SCREENS</span> - The mockups
            shows the app features in form of a carousel
          </p>
          <div className='grid wfgrid' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
         
         
         <Imagecomp path="p1a_fs1img" num={num6} className="img" />
          
          
          </div>
          <p className='fsheading' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>LOGIN AND SIGN-UP SCREENS</span> - After
            onboarding screen new users -{'>'} sign up page and existing users -
            {'>'}
            login page
          </p>
          <div className='grid wfgrid' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
         
         
          <Imagecomp path="p1a_fs2img" num={num3} className="img" />
          
          
          </div>
          <p className='fsheading' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>PROFILE BUILDING SCREENS</span> -
            Illustrations that hint on what to expect from the app
          </p>
          <div className='grid wfgrid' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          
          
          <Imagecomp path="p1a_fs3img" num={num6} className="img" />
          
          
          </div>
          <p className='fsheading' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>HOME SCREEN </span> -
          </p>
          <div className='grid wfgrid' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          
          
          <Imagecomp path="p1a_fs4img" num={num3} className="img" />
          
          
          </div>
          <p className='fsheading' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>EXPLORE SCREENS </span> -
          </p>
          <div className='grid wfgrid' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          
          
          <Imagecomp path="p1a_fs5img" num={num3} className="img" />
          
          
          </div>
          <p className='fsheading' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>
              MOOD - CHART AND WORD CLOUD SCREENS
            </span> -
          </p>
          <div className='flex justify-center'>
            <div className='grid wfgrid' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            
            
              <Imagecomp path="p1a_fs6img" num={num3} className="img" />
            
            
            </div>
          </div>
          <p className='fsheading' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>DIGITAL DIARY SCREENS </span> -
          </p>
          <div className='grid wfgrid' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          
          
          <Imagecomp path="p1a_fs7img" num={num3} className="img" />
          
          
          </div>
          <p className='fsheading' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>BOOKING CONSULTATION SCREENS </span> -
          </p>
          <div className='grid wfgrid' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          
          
          <Imagecomp path="p1a_fs8img" num={num6} className="img" />
          
          
          </div>
          <p className='fsheading' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>ZIFCARE GOLD AND PROFILE SCREEN</span> -
            The zifcare GOLD pitch screen for the non - paying users which
            includes - features, a pitch video and ‘Take a demo’ button. A gold
            coin was designed that would show in the profile screen, on
            purchasing the membership
          </p>
     
            <div className='grid wfgrid' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            
            
            <Imagecomp path="p1a_fs9img" num={num3} className="img" />
            
            
            </div>
       
          <p className='fsheading' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>ZIFCARE GOLD COURSES SCREENS</span> -
          </p>
          <div className=' wfgrid' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          
          
          <Imagecomp path="p1a_fs10img" num={num3} className="img" />
          
          
          </div>
        </div>
        <div className='flex justify-center ' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          <div className='project1_nav appbtn'>
            <a href="https://www.figma.com/proto/S2nRv6Gusbxrp1wKjfsfaJ/Zifcare-app?node-id=28%3A3&scaling=scale-down&page-id=28%3A2&starting-point-node-id=28%3A3&show-proto-sidebar=1" target="_blank"><button className=' active'>View Prototype</button></a>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalScreens;
