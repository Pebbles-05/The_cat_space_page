import Carousal1Project1 from '../../../media/Carousal1Project1.png';
import Carousal2Project1 from '../../../media/Carousal2Project1.png';
import Carousal3Project1 from '../../../media/Carousal3Project1.png';
import Carousal4Project1 from '../../../media/Carousal4Project1.png';
import Carousal5Project1 from '../../../media/Carousal5Project1.png';
import Carousal6Project1 from '../../../media/Carousal6Project1.png';
import Carousal7Project1 from '../../../media/Carousal7Project1.png';
import Carousal8Project1 from '../../../media/Carousal8Project1.png';
import Carousal9Project1 from '../../../media/Carousal9Project1.png';
import Carousal10Project1 from '../../../media/Carousal10Project1.png';
import Carousal11Project1 from '../../../media/Carousal11Project1.png';
import Carousal13Project1 from '../../../media/Carousal13Project1.png';
import Carousal12Project1 from '../../../media/Carousal12Project1.png';
import Carousal14Project1 from '../../../media/Carousal14Project1.png';
import Carousal15Project1 from '../../../media/Carousal15Project1.png';
import Carousal16Project1 from '../../../media/Carousal15Project1.png';
import Carousal17Project1 from '../../../media/Carousal15Project1.png';
import Carousal18Project1 from '../../../media/Carousal15Project1.png';
import Carousal19Project1 from '../../../media/Carousal15Project1.png';
import FinalScreen1Project1 from '../../../media/FinalScreen1Project1.png';
import FinalScreen2Project1 from '../../../media/FinalScreen2Project1.png';
import FinalScreen3Project1 from '../../../media/FinalScreen3Project1.png';
import FinalScreen4Project1 from '../../../media/FinalScreen4Project1.png';
import Carousal from '../../../subcomponent/carousal';

const FinalScreens = () => {
  const data1 = [Carousal3Project1, Carousal2Project1, Carousal1Project1];
  const data2 = [
    Carousal4Project1,
    Carousal5Project1,
    Carousal6Project1,
    Carousal7Project1,
  ];
  const data3 = [Carousal8Project1, Carousal9Project1, Carousal10Project1];
  const data4 = [Carousal11Project1, Carousal12Project1, Carousal13Project1];
  const data5 = [
    Carousal14Project1,
    Carousal15Project1,
    Carousal16Project1,
    Carousal17Project1,
    Carousal18Project1,
    Carousal19Project1,
  ];
  return (
    <>
      <div className='my-7'>
        <h1 className='Headings'>FINAL SCREENS</h1>
        <div className='Contents my-2'>
          <p className='my-4'>
            I followed the process of{' '}
            <span className='pink-text'>adaptive design</span>. designed screens
            for both website and phone
          </p>
          <p className='my-4'>
            <span className='pink-text'>View live page</span> - zifcare.com
          </p>
          <p className='my-4'>
            <span className='pink-text'>HERO SECTION</span> - The background
            lotus is a floating image that stays still throughout the pages.
          </p>
          <div className='img-div my-7'>
            <img src={FinalScreen1Project1} alt='' className='img' />
          </div>
          <p className='my-4'>
            <span className='pink-text'>PROFILE DASHBOARD</span> - The profile
            dashboard for making navigation through saved items easy
          </p>
          <div className='img-div my-7'>
            <img src={FinalScreen2Project1} alt='' className='img' />
          </div>
          <p className='my-4'>
            <span className='pink-text'>ORGANIZATION SIGN-UP SECTIONS -</span>
          </p>
          <div className='my-7'>
            <Carousal data={data1} />
          </div>
          <p className='my-4'>
            <span className='pink-text'>BOOKING A CONSULTANT STEPS - </span>
          </p>
          <div className='my-7'>
            <Carousal data={data2} />
          </div>
          <p className='my-4'>
            <span className='pink-text'>JOURNAL ENTRY SECTIONS </span> - It is
            basically a digital diary
          </p>
          <div className='my-7'>
            <Carousal data={data3} />
          </div>
          <p className='my-4'>
            <span className='pink-text'>CONTENT SCREENS</span> - I added card
            hover animations for all content cards
          </p>
          <div className='my-7'>
            <Carousal data={data4} />
          </div>
          <p className='my-4'>
            <span className='pink-text'>AUTHOR SCREEN</span> - A screen that
            sums up all the content written by a author in zifcare
          </p>
          <div className='img-div my-7'>
            <img src={FinalScreen3Project1} alt='' className='img' />
          </div>
          <p className='my-4'>
            <span className='pink-text'>ZIFCARE GOLD HERO SECTION</span> - I
            redesigned the zifcare gold pitch page for non - gold zifcare users
          </p>
          <div className='my-7'>
            <Carousal data={data5} />
          </div>
          <p className='my-4'>
            <span className='pink-text'>UNIQUE PAGINATION</span> - I indepently
            thought an unique pagination idea
          </p>
          <div className='img-div my-7'>
            <img src={FinalScreen4Project1} alt='' className='img' />
          </div>
          <p className='my-4'>
            I re-designed the rest of the screens following the style guide I
            defined. No major changes were required.
          </p>
        </div>
      </div>
    </>
  );
};

export default FinalScreens;
