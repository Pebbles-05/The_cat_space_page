import MoodboardWiggle from '../../media/MoodboardWiggle.png';
import MoodboarNeko from '../../media/MoodboarNeko.png';

const Moodboard = () => {
  return (
    <div className='my-7'>
      <h1 className='Headings'>MOODBOARD</h1>
      <div className='img-div my-7'>
        <img
          src={MoodboardWiggle}
          alt=''
          className='w-full img hidden md:block'
        />
        <img src={MoodboarNeko} alt='' className='w-full img block md:hidden' />
      </div>
    </div>
  );
};

export default Moodboard;
