import Plate1 from '../../media/moodboard neko.png';
import Plate2 from '../../media/moodboard torikae.png';
import Plate1Phone from '../../media/Plate1Phone.png';
import Plate2Phone from '../../media/Plate2Phone.png';

const Moodboard = () => {
  return (
    <>
      <div className='my-7'>
        <h1 className='Headings' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">MOOD BOARD</h1>
        <div className='Contents mt-1'>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">The moodboard for Nekomimi -</p>
          <p className='mt-1' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            Mood setting : <span className='cream-text'>Aesthetic</span> -{' '}
            <span className='yellow-text'>Colorful</span> -{' '}
            <span className='pink-text'>Attractive</span>
          </p>
          <div className='img-div my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <img src={Plate1} alt='' className='bigimg  hidden md:block' />
            <img
              src={Plate1Phone}
              alt=''
              className='bigimg  block md:hidden'
            />
          </div>
          <p className='mt-1' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">The moodboard for Torikae -</p>
          <p className='mt-1' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            Mood setting : <span className='grey-text'>Classy</span>  - Minimal - <span className='violet-text'>Exclusive</span>
          </p>
          <div className='img-div my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
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
