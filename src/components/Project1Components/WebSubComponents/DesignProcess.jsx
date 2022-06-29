import Arrow from '../../../media/Arrow';
import UserFlow1 from '../../../media/UserFlow1.png';

const DesignProcess = () => {
  return (
    <>
      <div className='my-7 '>
        <h1 className='Headings'>DESIGN PROCESS</h1>
        <div className='Contents mt-4'>
          <div className='grid md:grid-cols-9 grid-cols-1 dpflex'>
            <div className='flex flex-col align-top step'>
              <p className=' dptext'>Design</p>
              <p className=' dptext pink-text  md:mt-2'>Fix basic UI</p>
            </div>
            <div className='arrow'>
              <div>{Arrow}</div>
            </div>
            <div className='flex flex-col align-top step'>
              <p className=' dptext'>Ideate</p>
              <p className=' dptext pink-text  md:mt-2'>
                Brainstorm to find solutions for researched problems
              </p>
            </div>
            <div className='arrow'>
              <div>{Arrow}</div>
            </div>
            <div className='flex flex-col align-top step'>
              <p className='dptext'>Design</p>
              <p className=' dptext pink-text  md:mt-2'>Design the solutions ideated</p>
            </div>
            <div className='arrow'>
              <div>{Arrow}</div>
            </div>
            <div className='flex flex-col align-top step'>
              <p className=' dptext'>Develop</p>
              <p className=' dptext pink-text  md:mt-2'>
                Handoff designs and coordinate to perfect
              </p>
            </div>
            <div className='arrow'>
              <div>{Arrow}</div>
            </div>
            <div className='flex flex-col align-top step'>
              <p className=' dptext'>Deliver</p>
              <p className=' dptext pink-text  md:mt-2'>
                Next steps : usability testing
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='my-7'>
        <h1 className='Headings'>USER FLOW</h1>
        <div className='img-div  md:mt-7'><img loading='lazy' className='midimg' src={UserFlow1} alt="UserFlow1" /></div>
      </div>
    </>
  );
};

export default DesignProcess;
