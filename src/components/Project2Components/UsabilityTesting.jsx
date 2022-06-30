import BhaskarUT1 from '../../media/BhaskarUT1.svg';
import BhaskarUT2 from '../../media/BhaskarUT2.svg';
import BhaskarUT3 from '../../media/BhaskarUT3.svg';

const UsabilityTesting = () => {
  return (
    <>
      <div className='my-7'>
        <h1 className='Headings'>USABILITY TESTING</h1>
        <div className='Contents mt-1'>
          <p>
            I conducted usability testing with the same 5 recruiters that I
            interviewed. I sent them the <span className='pink-text'>prototype link</span> where I asked them
            to <span className='pink-text'>comment the problems</span> that they
            faced
          </p>
          <p className='mt-4'>
            <span className='pink-text'>Problem 1</span> : Problem understanding
            which section of navbar they are on
          </p>
          <div className='grid grid-cols-12 mt-4'>
            <div className='col-span-12 lg:col-span-2 flex justify-start lg:pt-14'>
              <p>Before :</p>
            </div>
            <div className='col-span-12 lg:col-span-10 utimg-div'>
              <img  src={BhaskarUT1} alt='' />
            </div>
          </div>
          <p className='mt-4'>
            <span className='pink-text'>Solution</span> : Changed navbar as
            shown
          </p>
          <div className='grid grid-cols-12 mt-4'>
            <div className='col-span-12 lg:col-span-2 flex justify-start lg:pt-14'>
              <p>After :</p>
            </div>
            <div className='col-span-12 lg:col-span-10 utimg-div'>
              <img  src={BhaskarUT2} alt=''  />
            </div>
          </div>
          <p className='mt-4'>
            <span className='pink-text'>Problem 2</span> : The hero section
            dosent have a follow-up to the experience section thus making it
            difficult to comprehend the story presented
          </p>
          <p className='mt-4'>
            <span className='pink-text'>Solution</span> : Added this page after
            the hero section for easier comprehension
          </p>
          <div className='img-div mt-4 md:mt-7'>
            <img src={BhaskarUT3} alt='' className='img' />
          </div>
          <p className='mt-4'>
            <span className='pink-text'>Problem 3</span> : The portfolio was too
            long
          </p>
          <p className='mt-4'>
            <span className='pink-text'>Solution</span> : I decided to add a
            fast scroll animation where, when scrolled once, the page will
            immediately move to the next section
          </p>
        </div>
      </div>
      <div className='my-7'>
        <h1 className='Headings'>CONCLUSION</h1>
        <div className='Contents mt-1'>
          <p>The portfolio later helped Bhaskar get his dream job</p>
          <p className='mt-4'>
            I was able to meet{' '}
            <span className='pink-text'>Bhaskar’s satisfaction</span> from the
            designs. I was also able to <span className='pink-text'>solve</span>{' '}
            most of the <span className='pink-text'>problems</span> after the
            usability testing. I prepared a seperate detailed{' '}
            <span className='pink-text'>design system</span> to help the
            developer build it. I also used{' '}
            <span className='pink-text'>lottie animations</span> in some spaces
            as it helped to reduce the loading time of the site.
          </p>
        </div>
      </div>
    </>
  );
};

export default UsabilityTesting;
