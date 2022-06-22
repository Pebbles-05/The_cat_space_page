import moodboard from '../../../media/moodboard1.png';
import MoodBoardMobile from '../../../media/MoodBoardMobile.png';

const Moodboard = () => {
  return (
    <>
      <div className='my-7'>
        <h1 className='Headings'>GOAL</h1>
        <div className='Contents my-4'>
          100% color contrast can be
          <span className='pink-text'> eye straining</span> specially for people
          with glasses or aged above 30. Purple and white - the previous color
          palette - had a color conntrast of 94.1%. Hence to create a calm mood
          I changed the background to #F3F1F5 while retaining the brand color,
          making the contrast 80.9%
        </div>
        <div className='img-div my-7'>
          <img src={moodboard} alt='' className='w-full img hidden md:block' />
          <img
            src={MoodBoardMobile}
            alt=''
            className='w-full img block md:hidden'
          />
        </div>
      </div>
    </>
  );
};

export default Moodboard;
