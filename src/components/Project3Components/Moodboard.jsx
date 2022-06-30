import Plate1 from '../../media/moodboard neko.png';
import Plate2 from '../../media/moodboard torikae.png';
import Plate1Phone from '../../media/Plate1Phone.png';
import Plate2Phone from '../../media/Plate2Phone.png';

const Moodboard = () => {
  return (
    <>
      <div className='my-7'>
        <h1 className='Headings'>MOOD BOARD</h1>
        <div className='Contents mt-1'>
          <p>The moodboard for Nekomimi -</p>
          <p className='mt-1'>
            Mood setting : <span className='cream-text'>Aesthetic</span> -{' '}
            <span className='yellow-text'>Colorful</span> -{' '}
            <span className='pink-text'>Attractive</span>
          </p>
          <div className='img-div my-7'>
            <img src={Plate1} alt='' className='bigimg  hidden md:block' />
            <img
              src={Plate1Phone}
              alt=''
              className='bigimg  block md:hidden'
            />
          </div>
          <p className='mt-1'>The moodboard for Torikae -</p>
          <p className='mt-1'>
            Mood setting : Classy - Minimal -{' '}
            <span className='violet-text'>Exclusive</span>
          </p>
          <div className='img-div my-7'>
            <img src={Plate2} alt='' className='bigimg hidden md:block' />
            <img
              src={Plate2Phone}
              alt=''
              className='bigimg block md:hidden'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Moodboard;
