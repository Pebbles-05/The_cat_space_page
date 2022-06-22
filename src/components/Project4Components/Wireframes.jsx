import Wireframe1Project4 from '../../media/Wireframe1Project4.png';
import Wireframe2Project4 from '../../media/Wireframe2Project4.png';
import Wireframe3Project4 from '../../media/Wireframe3Project4.png';
import Wireframe4Project4 from '../../media/Wireframe4Project4.png';
import Wireframe5Project4 from '../../media/Wireframe5Project4.png';
import Wireframe6Project4 from '../../media/Wireframe6Project4.png';
import Wireframe7Project4 from '../../media/Wireframe7Project4.png';

const Wireframes = () => {
  return (
    <>
      <div className='my-7'>
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
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 my-7'>
          <div className='img-div'>
            <img src={Wireframe1Project4} alt='' className='img' />
          </div>
          <div className='img-div'>
            <img src={Wireframe2Project4} alt='' className='img' />
          </div>
          <div className='img-div'>
            <img src={Wireframe3Project4} alt='' className='img' />
          </div>
          <div className='img-div'>
            <img src={Wireframe4Project4} alt='' className='img' />
          </div>
        </div>
      </div>
      <div className='my-7'>
        <h1 className='Headings'>WIREFRAMES ITERATION 2</h1>
        <div className='Contents mt-1'>
          <p className='my-2'>
            I conducted usability testing to make my app more productive. The
            second iteration was done based on{' '}
            <span className='pink-text'>usability testing reviews</span>
          </p>
          <p className='my-2'>
            <span className='pink-text'>Review</span> : “ Oh I didnt realise
            there was a pet walk feature too at first ! ”
          </p>
          <p className='my-2'>
            <span className='pink-text'>Ideating silently</span> : “ Oh no that
            is not what I wanted . I want a user to be aware of it as soon as
            they open the app. Gotta fix it “
          </p>
          <p className='my-2'>
            <span className='pink-text'>Solution</span> : Added the pet walk
            feature in the navbar
          </p>
          <div className='grid grid-cols-2 gap-10 md:gap-20 my-7'>
            <div className='img-div'>
              <img src={Wireframe5Project4} alt='' className='img md:w-1/2' />
            </div>
            <div className='img-div'>
              <img src={Wireframe6Project4} alt='' className='img md:w-1/2' />
            </div>
          </div>
          <p className='my-2'>
            <span className='pink-text'>Review</span> : “How would I know if the
            pet buddy really did walk my dog or no ?”
          </p>
          <p className='my-2'>
            <span className='pink-text'>Ideating silently</span> : “Oh why didnt
            I think of that before !”
          </p>
          <p className='my-2'>
            <span className='pink-text'>Solution</span> : Added a “track your
            wiggle” feature. When no task is added - a notification would reach
            the phone, which when clicked will show the same
          </p>
          <div className='img-div my-7'>
            <img src={Wireframe7Project4} alt='' className='img w-1/2 md:w-1/4' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wireframes;
