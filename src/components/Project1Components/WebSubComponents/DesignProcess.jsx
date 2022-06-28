import Arrow from '../../../media/Arrow';
import UserFlow1 from '../../../media/UserFlow1.png';

const DesignProcess = () => {
  return (
    <>
      <div className='my-7'>
        <h1 className='Headings'>DESIGN PROCESS</h1>
        <div className='Contents mt-4'>
          <div className='grid md:grid-cols-9 grid-cols-1'>
            <div className='flex flex-col align-top'>
              <p className='flex justify-center text-lg'>Design</p>
              <p className='flex justify-center text-lg pink-text text-center md:mt-2'>Fix basic UI</p>
            </div>
            <div className='flex justify-center py-7 mb-1 md:mt-1 rotate-90 md:rotate-0'>
              <div className='w-1/12 md:w-1/3'>{Arrow}</div>
            </div>
            <div className='flex flex-col align-top'>
              <p className='flex justify-center text-lg'>Ideate</p>
              <p className='flex justify-center text-lg pink-text text-center md:mt-2'>
                Brainstorm to find solutions for researched problems
              </p>
            </div>
            <div className='flex justify-center py-7 mb-1 md:mt-1 rotate-90 md:rotate-0'>
              <div className='w-1/12 md:w-1/3'>{Arrow}</div>
            </div>
            <div className='flex flex-col align-top'>
              <p className='flex justify-center text-lg'>Design</p>
              <p className='flex justify-center text-lg pink-text text-center md:mt-2'>Design the solutions ideated</p>
            </div>
            <div className='flex justify-center py-7 mb-1 md:mt-1 rotate-90 md:rotate-0'>
              <div className='w-1/12 md:w-1/3'>{Arrow}</div>
            </div>
            <div className='flex flex-col align-top'>
              <p className='flex justify-center text-lg'>Develop</p>
              <p className='flex justify-center text-lg pink-text text-center md:mt-2'>
                Handoff designs and coordinate to perfect
              </p>
            </div>
            <div className='flex justify-center py-7 mb-1 md:mt-1 rotate-90 md:rotate-0'>
              <div className='w-1/12 md:w-1/3'>{Arrow}</div>
            </div>
            <div className='flex flex-col align-top'>
              <p className='flex justify-center text-lg'>Deliver</p>
              <p className='flex justify-center text-lg pink-text text-center md:mt-2'>
                Next steps : usability testing
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='my-7'>
        <h1 className='Headings'>USER FLOW</h1>
        <div className='img-div md:mt-7'><img src={UserFlow1} alt="UserFlow1" /></div>
      </div>
    </>
  );
};

export default DesignProcess;
