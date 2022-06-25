import BhaskarMoodboardBig from '../../media/BhaskarMoodboardBig.svg';
import BhaskarMoodboardSmall from '../../media/BhaskarMoodboardSmall.svg';

const Moodboard = () => {
  return (
    <div className='my-7'>
      <h1 className='Headings'>MOODBOARD</h1>
      <div className='img-div mt-7'>
        <img src={BhaskarMoodboardBig} alt='' className='img w-full hidden md:block' />
        <img src={BhaskarMoodboardSmall} alt='' className='img w-full md:hidden block' />
      </div>
    </div>
  );
};

export default Moodboard;
