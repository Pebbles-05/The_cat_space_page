import lappyPhone from '../../../media/zifcare web mockups.png';
import Flow from '../../../media/Flow.png';

const Hero = () => {
  return (
    <>
      <div className='img-div my-20'>
        <img src={lappyPhone} alt='' className='img' />
      </div>
      <div className='Contents mt-1'>
        Zifcare is a self development platform which helps users cope up with
        <span className='pink-text'> mental health problems</span> by providing
        features like blogs, meditations, digital diary, mood tracking, focus
        music, contacting an expert and special courses
      </div>
      <div className='my-7'>
        <h1 className='Headings'>GOAL</h1>
        <div className='Contents mt-1'>
          <ul className='ml-7 list-disc'>
            <li>
              <span className='pink-text'>Redesign</span> the UI and
              <span className='pink-text'>improve </span>the current UX.
            </li>
            <li>
              Brainstorm to introduce a
              <span className='pink-text'>revenue system</span> for the company
            </li>
          </ul>
        </div>
      </div>
      <div className='my-7'>
        <h1 className='Headings'>PROBLEMS IDENTIFIED</h1>
        <div className='Contents mt-1'>
          <ul className='ml-7 list-disc'>
            <li>
              <span className='pink-text'>UI inconsistency </span> -
              inconsistent padding, icons, texts, cards and buttons
              <span className='pink-text'>improve </span>the current UX.
            </li>
            <li>
              The
              <span className='pink-text'> color pallete</span> didnt meet the
              mood of the product
            </li>
          </ul>
        </div>
      </div>
      <div className='my-7'>
        <h1 className='Headings'>USER RESEARCH</h1>
        <div className='Contents mt-1'>
          <p className='mb-2'>
            Primary Research - Interviews for primary reasearch were already
            done by the team. All I summed up the important details like the{' '}
            <span className='pink-text'> age range </span> of the users,{' '}
            <span className='pink-text'>
              {' '}
              favourite features, problems faced while navigating
            </span>{' '}
            and further expectations from the product.
          </p>
          <p className='mt-2'>
            Secondary Research - I researched other{' '}
            <span className='pink-text'>competitive</span> products like
            Headspace, ThinkRight, InnerHour and ProactiveforHer
          </p>
        </div>
      </div>
      <div className='my-7'>
        <h1 className='Headings'>IDEATION</h1>
        <div className='Contents mt-1'>
          <p className='mb-2'>
            Mood :<span className='green-text'> Calm </span> -
            <span className='yellow-text-sec'>Happy</span> -
            <span className='blue-text'>Peaceful</span>
          </p>
          <div className='my-7'>
            <p className='mt-2'>
              <span className='pink-text'>Problem 1 </span>: The users had
              difficulty while navigating their saved contents
            </p>
            <p className='mt-2'>
              <span className='pink-text'>Solution </span>: Make a personalized
              dashboard
            </p>
          </div>
          <div className='my-7'>
            <p className='mt-2'>
              <span className='pink-text'>Problem 2 </span>: The users often
              couldnt contact the experts because of clashing schedules
            </p>
            <p className='mt-2'>
              <span className='pink-text'>Solution </span>: Create a proper
              consultation booking process to avoid any conflict
            </p>
          </div>
          <div className='my-7'>
            <p className='mt-2'>
              <span className='pink-text'>Problem 3 </span>: Distinguish between
              payable and free content in the platform
            </p>
            <p className='mt-2'>
              <span className='pink-text'>Solution </span>: Create a proper
              consultation booking process to avoid any conflict
            </p>
          </div>
        </div>
      </div>
      <div className='my-7'>
        <h1 className='Headings'>DESIGN PROCESS</h1>
        <div className='img-div my-2'>
          <img src={Flow} alt='' className='w-full img' />
        </div>
      </div>
    </>
  );
};

export default Hero;