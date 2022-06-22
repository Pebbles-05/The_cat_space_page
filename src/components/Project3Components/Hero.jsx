import lappy from '../../media/Project3Lappy.png';
import lappy2 from '../../media/Project3Lappy2.png';
import '../../styles/app.scss';

const Hero = () => {
  return (
    <>
      <div className='img-div'>
        <img src={lappy} alt='' className='img' />
      </div>
      <div className='my-7'>
        <h1 className='Headings'>PROJECT BRIEF</h1>
        <div className='Contents mt-1'>
          The project “NEKOMIMI” was made for{' '}
          <span className='pink-text'>Ethernals Hackathon</span> over a span of{' '}
          <span className='pink-text'>8 days</span>
        </div>
      </div>
      <div className='my-7'>
        <h1 className='Headings'>GOAL</h1>
        <div className='Contents mt-1'>
          Design a{' '}
          <span className='pink-text'>decentralized content creator's hub</span>{' '}
          similar to youtube but involving the quirks of{' '}
          <span className='pink-text'>Web3</span> and{' '}
          <span className='pink-text'>Virtual Reality</span>
        </div>
      </div>
      <div className='my-7'>
        <h1 className='Headings'>PROBLEMS IDENTIFIED</h1>
        <div className='Contents mt-1'>
          <ul className='ml-7 list-disc'>
            <li>
              How do we make the{' '}
              <span className='pink-text'>website navigation easy</span> with
              all the different features ?{' '}
            </li>
            <li>
              How do we make the{' '}
              <span className='pink-text'>payment process</span> with seamless ?{' '}
            </li>
            <li>
              How do we make the{' '}
              <span className='pink-text'>ui attractive</span>?{' '}
            </li>
          </ul>
        </div>
      </div>
      <div className='my-7'>
        <h1 className='Headings'>USER RESEARCH</h1>
        <div className='Contents mt-1'>
          <p>
            I <span className='pink-text'>researched products</span> like
            youtube, tiktok, instagram, airswap, uniswap and tswap. I also
            looked into sites like dribbble and behance for inspiration
          </p>
        </div>
      </div>
      <div className='my-7'>
        <h1 className='Headings'>IDEATION</h1>
        <div className='Contents mt-1'>
          <p>Planning the revenue system -</p>
          <ul className='ml-7 list-disc'>
            <li>
              The viewer would have to pay for viewing the content in
              <span className='pink-text'>“Theatre mode”</span> aka VR
            </li>
            <li>
              The content creator would have to pay for enabling{' '}
              <span className='pink-text'>streaming</span> or video-sharing and
              <span className='pink-text'>patronship</span>
            </li>
          </ul>
          <p className='mt-1'>
            The payments for the website was to be done either by purchasing new
            cryptocurrency or swapping them. This payment system could also turn
            into a <span className='pink-text'>potential revenue</span>.
          </p>
          <p className='mt-1'>
            This led to <span className='pink-text'>“Torikae”</span> , a{' '}
            <span className='pink-text'>payment gateway</span> for nekomimi and
            also an independent swapping platform for cryptocurrency investors.
          </p>
        </div>
      </div>
      <div className='img-div'>
        <img src={lappy2} alt='' className='img' />
      </div>
    </>
  );
};

export default Hero;
