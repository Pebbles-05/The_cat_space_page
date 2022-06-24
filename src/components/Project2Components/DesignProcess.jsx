import Arrow from '../../media/Arrow';
import UserFlow1 from '../../media/UserFlow1';

const DesignProcess = () => {
  return (
    <>
      <div className='my-7'>
        <h1 className='Headings'>CLIENT DEMANDS</h1>
        <div className='Contents mt-4'>
          <div className='grid md:grid-cols-9 grid-cols-1'>
            <div className='flex justify-center'>
              <p className='text-2xl'>Ideate</p>
            </div>
            <div className='flex justify-center'>{Arrow}</div>
            <div className='flex justify-center'>
              <p className='text-2xl'>Design Iteration 1</p>
            </div>
            <div className='flex justify-center'>
              <img
                src={Arrow}
                alt='rightArrow'
                srcset=''
                className='w-1/12 md:w-1/3 py-4 md:mt-1 rotate-90 md:rotate-0'
              />
            </div>
            <div className='flex justify-center'>
              <p className='text-2xl'>User Testing</p>
            </div>
            <div className='flex justify-center'>
              <img
                src={Arrow}
                alt='rightArrow'
                srcset=''
                className='w-1/12 md:w-1/3 py-4 md:mt-1 rotate-90 md:rotate-0'
              />
            </div>
            <div className='flex justify-center'>
              <p className='text-2xl'>Design Iteration 2</p>
            </div>
            <div className='flex justify-center'>
              <img
                src={Arrow}
                alt='rightArrow'
                srcset=''
                className='w-1/12 md:w-1/3 py-4 md:mt-1 rotate-90 md:rotate-0'
              />
            </div>
            <div className='flex justify-center'>
              <p className='text-2xl'>Deliver</p>
            </div>
          </div>
        </div>
      </div>
      <div className='my-7'>
        <h1 className='Headings'>USER FLOW</h1>
        <div className='img-div mt-7'>{UserFlow1}</div>
      </div>
    </>
  );
};

export default DesignProcess;
