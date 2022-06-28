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
              <p>Ideate</p>
            </div>
            <div className='flex justify-center rotate-90 md:rotate-0 py-7 md:py-0'>
              {Arrow}
            </div>
            <div className='flex justify-center'>
              <p>Design Iteration 1</p>
            </div>
            <div className='flex justify-center rotate-90 md:rotate-0 py-7 md:py-0'>
              {Arrow}
            </div>
            <div className='flex justify-center'>
              <p>User Testing</p>
            </div>
            <div className='flex justify-center rotate-90 md:rotate-0 py-7 md:py-0'>
              {Arrow}
            </div>
            <div className='flex justify-center'>
              <p>Design Iteration 2</p>
            </div>
            <div className='flex justify-center rotate-90 md:rotate-0 py-7 md:py-0'>
              {Arrow}
            </div>
            <div className='flex justify-center'>
              <p>Deliver</p>
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
