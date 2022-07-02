import Imagecomp from "../../subcomponent/imagecomp";

const Hero = () => {
  return (
    <>
      <div className='img-div heroimg-div' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
     
      <img loading="eager" src="https://ik.imagekit.io/thecatspace/catspace_media/p3_heroimg1.png" alt="heroimg" className="heroimg" />
     
      </div>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>PROJECT BRIEF</h1>
        <div className='Contents mt-1'>
          The project “NEKOMIMI” was made for{' '}
          <span className='pink-text'>Ethernals Hackathon 2022</span>
        </div>
      </div>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>GOAL</h1>
        <div className='Contents mt-1'>
          Design a{' '}
          <span className='pink-text'>decentralized content creator's hub</span> similar to youtube but involving the quirks of <span className='pink-text'>Web3</span> and{' '}
          <span className='pink-text'>Virtual Reality</span>
        </div>
      </div>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
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
              <span className='pink-text'>payment process</span> seamless ?{' '}
            </li>
            <li>
              How do we make the{' '}
              <span className='pink-text'>ui attractive</span> ?
            </li>
          </ul>
        </div>
      </div>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>USER RESEARCH</h1>
        <div className='Contents mt-1'>
          <p>
            I <span className='pink-text'>researched products</span> like
            youtube, instagram, airswap, uniswap and tswap. I also
            looked into sites like dribbble and behance for inspiration
          </p>
        </div>
      </div>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>IDEATION</h1>
        <div className='Contents mt-1'>
          <p>Planning the revenue system -</p>
          <ul className='ml-7 list-disc'>
            <li>
              The viewer would have to pay for viewing the content in
              <span className='pink-text'> “Theatre mode”</span> aka VR
            </li>
            <li>
              The content creator would have to pay for enabling{' '}
              <span className='pink-text'>streaming</span> or video-sharing and
              <span className='pink-text'> patronship</span>
            </li>
          </ul>
          <p className='mt-5'>
            The payments for the website was to be done either by purchasing new
            cryptocurrency or swapping them. This payment system could also turn
            into a <span className='pink-text'>potential revenue</span>.
          </p>
          <p className='mt-5'>
            This led to <span className='pink-text'>“Torikae”</span> , a{' '}
            <span className='pink-text'>payment gateway</span> for nekomimi and
            also an independent swapping platform for cryptocurrency investors.
          </p>
        </div>
      </div>
      <div className='img-div heroimg-div' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
      <Imagecomp path="p3_heroimg2" num={[""]} className="heroimg" />
      </div>
    </>
  );
};

export default Hero;
