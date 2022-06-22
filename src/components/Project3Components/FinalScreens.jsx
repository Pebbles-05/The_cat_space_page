import FinalScreen1 from '../../media/FinalScreen1.png';
import FinalScreen2 from '../../media/FinalScreen2.png';
import FinalScreen3 from '../../media/FinalScreen3.png';
import FinalScreen4 from '../../media/FinalScreen4.png';
import FinalScreen5 from '../../media/FinalScreen5.png';
import FinalScreen6 from '../../media/FinalScreen6.png';
import FinalScreen7 from '../../media/FinalScreen7.png';
import FinalScreen8 from '../../media/FinalScreen8.png';
import FinalScreen9 from '../../media/FinalScreen9.png';
import FinalScreen10 from '../../media/FinalScreen10.png';
import Carousel1Img1 from '../../media/Carousel1Img1.png';
import Carousel1Img2 from '../../media/Carousel1Img2.png';
import Carousel1Img3 from '../../media/Carousel1Img3.png';
import Carousel1Img4 from '../../media/Carousel1Img4.png';
import Carousel2Img1 from '../../media/Carousel2Img1.png';
import Carousel2Img2 from '../../media/Carousel2Img2.png';
import Carousel2Img3 from '../../media/Carousel2Img3.png';
import Carousel2Img4 from '../../media/Carousel2Img4.png';
import Carousel3Img1 from '../../media/Carousel3Img1.png';
import Carousel3Img2 from '../../media/Carousel3Img2.png';
import Carousel3Img3 from '../../media/Carousel3Img3.png';
import Carousel3Img4 from '../../media/Carousel3Img4.png';
import Carousel4Img1 from '../../media/Carousel4Img1.png';
import Carousel4Img2 from '../../media/Carousel4Img2.png';
import Carousel4Img3 from '../../media/Carousel4Img3.png';
import Carousel4Img4 from '../../media/Carousel4Img4.png';
import Carousel5Img1 from '../../media/Carousel5Img1.png';
import Carousel5Img2 from '../../media/Carousel5Img2.png';
import Carousel5Img3 from '../../media/Carousel5Img3.png';
import Carousel5Img4 from '../../media/Carousel5Img4.png';
import Carousel6Img1 from '../../media/Carousel6Img1.png';
import Carousel6Img2 from '../../media/Carousel6Img2.png';
import Carousel6Img3 from '../../media/Carousel6Img3.png';
import Carousel6Img4 from '../../media/Carousel6Img4.png';
import Carousal from '../../subcomponent/carousal';
import GradientButton from '../../subcomponent/GradientButton';

const FinalScreens = () => {
  const data1 = [Carousel1Img1, Carousel1Img2, Carousel1Img3, Carousel1Img4];
  const data2 = [Carousel2Img1, Carousel2Img2, Carousel2Img3, Carousel2Img4];
  const data3 = [Carousel3Img1, Carousel3Img2, Carousel3Img3, Carousel3Img4];
  const data4 = [Carousel4Img1, Carousel4Img2, Carousel4Img3, Carousel4Img4];
  const data5 = [Carousel5Img1, Carousel5Img2, Carousel5Img3, Carousel5Img4];
  const data6 = [Carousel6Img1, Carousel6Img2, Carousel6Img3, Carousel6Img4];
  return (
    <div className='my-7'>
      <h1 className='Headings'>FINAL SCREENS OF NEKOMIMI</h1>
      <div className='Contents mt-1'>
        The background for nekomimi was supposed to be still while the elements
        are scrollable. I made designs for both{' '}
        <span className='pink-text'>light</span> and{' '}
        <span className='pink-text'>dark</span> mode.
        <h4 className='pink-text my-7'>HOME SCREENS - </h4>
        <div className='img-div mb-7'>
          <img src={FinalScreen1} alt='' className='img' />
        </div>
        <div className='img-div my-11'>
          <img src={FinalScreen2} alt='' className='img' />
        </div>
        <h1 className='pink-text my-7'>VIDEO PLAYER SCREENS - </h1>
        <div className='img-div mb-7'>
          <img src={FinalScreen3} alt='' className='img' />
        </div>
        <div className='img-div my-11'>
          <img src={FinalScreen4} alt='' className='img' />
        </div>
        <h4 className='pink-text my-7'>ACCOUNT MANAGEMENT SCREENS - </h4>
        <div className='img-div mb-7'>
          <img src={FinalScreen5} alt='' className='img' />
        </div>
        <div className='img-div my-11'>
          <img src={FinalScreen6} alt='' className='img' />
        </div>
        <h4>
          <span className='pink-text my-7'>VIDEO UPLOAD SCREENS - </span> One
          can either upload your video instantly or schedule it for later
        </h4>
        <div className='my-7'>
          <Carousal data={data1} />
        </div>
        <div className='my-7'>
          <Carousal data={data2} />
        </div>
        <h4 className='pink-text my-7'>LIVE STREAM SCREENS - </h4>
        <div className='my-7'>
          <Carousal data={data3} />
        </div>
        <div className='my-7'>
          <Carousal data={data4} />
        </div>
        <h4>
          <span className='pink-text my-7'>WEBCAM STREAM SCREENS -</span> One
          can schedule both webcam streams or pc streams. The process is the
          same for both. I am just highlighting it here for webcam streams{' '}
        </h4>
        <div className='my-7'>
          <Carousal data={data5} />
        </div>
        <div className='my-7'>
          <Carousal data={data6} />
        </div>
        <h4 className='pink-text my-7'>LIKED VIDEOS SCREENS - </h4>
        <div className='img-div mb-7'>
          <img src={FinalScreen7} alt='' className='img' />
        </div>
        <div className='img-div my-11'>
          <img src={FinalScreen8} alt='' className='img' />
        </div>
      </div>
      <h1 className='Headings'>FINAL SCREENS OF TORIKAE</h1>
      <div className='Contents mt-1'>
        <h4 className='pink-text my-7'>HOME SCREENS - </h4>
        <div className='img-div mb-7'>
          <img src={FinalScreen9} alt='' className='img' />
        </div>
        <div className='img-div my-11'>
          <img src={FinalScreen10} alt='' className='img' />
        </div>
      </div>
      <div className='flex justify-center my-7'>
        <GradientButton title='View Submission' />
      </div>
      <h1 className='Headings'>NEXT STEPS</h1>
      <div className='Contents mt-1'>
        <ul className='ml-7 list-disc'>
          <li>
            Evaluate the prototype with potential users to conduct{' '}
            <span className='pink-text'>usability test</span>
          </li>
          <li>
            <span className='pink-text'>Interview</span> potential users and{' '}
            <span className='pink-text'>conduct surveys</span> for enhancing
            features and rectifying faults
          </li>
        </ul>
      </div>
      <h1 className='Headings mb-4 mt-7'>CONCLUSION</h1>
      <div className='Contents mt-1'>
        <p>
          This project helped me <span className='pink-text'>explore</span>{' '}
          different compositions and gradients thereby{' '}
          <span className='pink-text'>improving</span> my visual design skills.
          I <span className='pink-text'>learned</span> a lot about web 3 , NFT
          and smart contracts. It also helped me to push my boundries and{' '}
          <span className='pink-text'>work faster</span> which was a major
          setback for me as a beginner
        </p>
      </div>
    </div>
  );
};

export default FinalScreens;
