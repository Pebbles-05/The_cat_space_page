import Arrow from '../../media/Arrow';
import UserFlow1 from '../../media/UserFlow1';

const DesignProcess = () => {
  return (
    <>
      <div className='my-7'>
        <h1 className='Headings'>DESIGN PROCESS</h1>
        <div className='Contents mt-4'>
          <div className='grid lg:grid-cols-11 grid-cols-1'>
            <div className='flex flex-col align-top'>
              <p className='flex lg:justify-start justify-center'>Discover</p>
              <p className='flex justify-center pink-text lg:text-left text-center'>
                User Interviews
              </p>
            </div>
            <div className='flex justify-center py-7 lg:py-0 lg:mr-10 mb-1 lg:mt-1 rotate-90 lg:rotate-0'>
              <div className='w-1/12 lg:w-1/3'>{Arrow}</div>
            </div>
            <div className='flex flex-col align-top'>
              <p className='flex lg:justify-start justify-center'>Ideate</p>
              <p className='flex justify-center pink-text lg:text-left text-center'>
                Define problems and brainstorm solutions
              </p>
            </div>
            <div className='flex justify-center py-7 lg:py-0 lg:mr-10 mb-1 lg:mt-1 rotate-90 lg:rotate-0'>
              <div className='w-1/12 lg:w-1/3'>{Arrow}</div>
            </div>
            <div className='flex flex-col align-top'>
              <p className='flex lg:justify-start justify-center'>
                Wireframe Iteration 1
              </p>
              <p className='flex justify-center pink-text lg:text-left text-center'>
                Design the solutions ideated
              </p>
            </div>
            <div className='flex justify-center py-7 lg:py-0 lg:mr-10 mb-1 lg:mt-1 rotate-90 lg:rotate-0'>
              <div className='w-1/12 lg:w-1/3'>{Arrow}</div>
            </div>
            <div className='flex flex-col align-top'>
              <p className='flex lg:justify-start justify-center'>Usability Testing</p>
              <p className='flex justify-center pink-text lg:text-left text-center'>
                Test wireframes with users
              </p>
            </div>
            <div className='flex justify-center py-7 lg:py-0 lg:mr-10 mb-1 lg:mt-1 rotate-90 lg:rotate-0'>
              <div className='w-1/12 lg:w-1/3'>{Arrow}</div>
            </div>
            <div className='flex flex-col align-top'>
              <p className='flex lg:justify-start justify-center'>
                Wireframe Iteration 2
              </p>
              <p className='flex justify-center pink-text lg:text-left text-center'>
                Design the changes required
              </p>
            </div>
            <div className='flex justify-center py-7 lg:py-0 lg:mr-10 mb-1 lg:mt-1 rotate-90 lg:rotate-0'>
              <div className='w-1/12 lg:w-1/3'>{Arrow}</div>
            </div>
            <div className='flex flex-col align-top'>
              <p className='flex lg:justify-start justify-center'>Final Screens</p>
              <p className='flex justify-center pink-text lg:text-left text-center'>
                Includes logo, colors, typography and high - fiedility screens
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='my-7'>
        <h1 className='Headings'>USER FLOW</h1>
        <div className='img-div md:mt-7'>{UserFlow1}</div>
      </div>
    </>
  );
};

export default DesignProcess;
