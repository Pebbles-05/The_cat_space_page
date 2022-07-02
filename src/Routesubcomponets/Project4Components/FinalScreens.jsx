import Imagecomp from "../../subcomponent/imagecomp";

const FinalScreens = () => {

const num3=[1,2,3];
const num6=["","","","","",""];


  return (
    <>
      <div className='my-7'>
        <h1 className='Headings' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">FINAL SCREENS</h1>
        <div className='Contents mt-1'>
          <p className='mb-3' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            In this <span className='pink-text'>app</span> pets are depicted as
            “<span className='pink-text'>wiggles”</span> ,
            <span className='pink-text'>pet buddies</span> as “
            <span className='pink-text'>wigglers”</span> and <span className='pink-text'>pet owners</span> as “
            <span className='pink-text'>wiggle parents</span>“
          </p>
          <p className='mb-10' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            Users can either{' '}
            <span className='pink-text'>
              {' '}
              enroll themselves as an wiggle parent or a wiggler
            </span>
          </p>
          <p className='mb-3' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">WIGGLE PARENT INTERFACE</p>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text cap'>
              Home Screens with Wiggler profile :{' '}
            </span>
          </p>
          <div className='wfgrid' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
         
         
          <Imagecomp path="p4_fs1img" num={num3} />
         
          </div>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true"> 
            <span className='pink-text cap'>
              Pet walk screens with Wiggler profile :
            </span>
          </p>
          <div className='wfgrid' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          
          
          <Imagecomp path="p4_fs2img" num={num3} />
          
          
          </div>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text cap'>Chat section</span> : One can call, video call, pay or report from the chat section
          </p>
          <div className='wfgrid' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          
          
          <Imagecomp path="placeholder" num={num3} />
          
          
          </div>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text cap'>Payment section</span> : One will be redirected to the payment app that they choose to pay from
          </p>
          <div className='wfgrid' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          
          
          <Imagecomp path="placeholder" num={num3} />
          
          
          </div>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text cap'>
              Sceduling a task and wiggle tracking
            </span>{' '}
            : I also added payment reminders and reschedules in the schedule
            section
          </p>
          <div className='wfgrid' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          
          <Imagecomp path="placeholder" num={num6} />
          
          </div>
          <p className='mt-7 mb-3' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">WIGGLER INTERFACE</p>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text cap'>
              Sceduling a task and wiggle tracking :
            </span>
          </p>
          <div className="wfgrid" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          <Imagecomp path="placeholder" num={num3} className="img" />
          </div>
          
        
        </div>
      </div>
    </>
  );
};

export default FinalScreens;
