import Imagecomp from "../../subcomponent/imagecomp";



const Wireframes = () => {

const num4=[1,2,3,4];

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>WIREFRAMES ITERATION 1</h1>
        <div className='Contents mt-1'>
          <p>Key Takeaways -</p>
          <ul className='ml-7 list-disc'>
            <li>
              Switching between pet walk and creche was inside the
              <span className='pink-text'> filter </span>section
            </li>
            <li>
              To <span className='pink-text'>keep a track</span> of all the
              appointments, I made a history section
            </li>
          </ul>
        </div>
        <div className='p4wfgrid'>
        
        <Imagecomp path="p4_wf1img" num={num4} />
        
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>WIREFRAMES ITERATION 2</h1>
        <div className='Contents mt-1'>
          <p className='my-2'>
            I conducted usability testing to make my app more productive. The
            second iteration was done based on{' '}
            <span className='pink-text'>usability testing reviews</span>
          </p>
          <p className='my-2'>
            <span className='pink-text '>Review</span> : “ Oh I didnt realise
            there was a pet walk feature too at first ! ”
          </p>
          <p className='my-2'>
            <span className='pink-text '>Ideating silently</span> : “ Oh no that
            is not what I wanted . I want a user to be aware of it as soon as
            they open the app. Gotta fix it “
          </p>
          <p className='my-2'>
            <span className='pink-text '>Solution</span> : Added the pet walk
            feature in the navbar
          </p>
          <p className='my-2'>
            <span className='pink-text '>Bonus </span> : I also made the profile screen wireframes more detailed
          </p>
          <div className='p4wfgrid'>
          
          
          <Imagecomp path="p4_wf2img" num={num4} />
         
          </div>
          <p className='my-2'>
            <span className='pink-text '>Review</span> : “How would I know if the
            pet buddy really did walk my dog or no ?”
          </p>
          <p className='my-2'>
            <span className='pink-text '>Ideating silently</span> : “Oh why didnt
            I think of that before !”
          </p>
          <p className='my-2'>
            <span className='pink-text '>Solution</span> : Added a “track your
            wiggle” feature. When no task is added - a notification would reach
            the phone, which when clicked will show the same
          </p>
       
        </div>
      </div>
    </>
  );
};

export default Wireframes;
