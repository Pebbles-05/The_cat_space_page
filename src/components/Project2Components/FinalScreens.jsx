import BFS1 from '../../media/BFS1.svg';
import BFS2 from '../../media/BFS2.svg';
import BFS3 from '../../media/BFS3.svg';
import BFS4 from '../../media/BFS4.svg';
import BFS5 from '../../media/BFS5.svg';
import BFSC1 from '../../media/BFSC1.png';
import BFSC2 from '../../media/BFSC2.png';
import BFSC3 from '../../media/BFSC3.png';
import BFSC4 from '../../media/BFSC4.png';
import Carousal from '../../subcomponent/carousal';

const FinalScreens = () => {
  const data = [BFSC1, BFSC2, BFSC3, BFSC4];
  return (
    <div className='my-7'>
      <h1 className='Headings'>FINAL SCREENS</h1>
      <div className='Contents mt-1'>
        <p>
          <span className='pink-text'>HERO SCREEN</span> - I customized a
          illustration to make it look like Bhaskar
        </p>
        <div className='img-div mt-4 md:mt-7'>
          <img src={BFS1} alt='' className='img ' />

        </div>
        <p className='mt-4 md:mt-7'>
          <span className='pink-text'>EXPERIENCE SCREENS</span> - I made bullet
          points for texts to make it easy to read
        </p>
        <div className='my-7'>
          <Carousal data={data} />
        </div>
        <p className='mt-4 md:mt-7'>
          <span className='pink-text'>SKILLS SCREEN</span> -
        </p>
        <div className='img-div mt-4 md:mt-7'>
          <img src={BFS2} alt='' className='img ' />
        </div>
        <p className='mt-4 md:mt-7'>
          <span className='pink-text'>PROJECTS SCREENS</span> - I introduced a
          character who guides through his projects in an interactive way
        </p>
        <div className='img-div mt-4 md:mt-7'>
          <img src={BFS3} alt='' className='img' />
        </div>
        <p className='mt-4 md:mt-7'>
          <span className='pink-text'>PUBLICATIONS SCREENS</span> - I introduced
          another character that guides the viewer through his patents
        </p>
        <div className='img-div mt-4 md:mt-7'>
          <img src={BFS4} alt='' className='img' />
        </div>
        <p className='mt-4 md:mt-7'>
          <span className='pink-text'>ACHIEVEMENTS SCREENS</span> - I listed his
          achievements in form of a caraousel
        </p>
        <div className='img-div mt-4 md:mt-7'>
          <img src={BFS5} alt='' className='img' />
        </div>
      </div>
    </div>
  );
};

export default FinalScreens;
