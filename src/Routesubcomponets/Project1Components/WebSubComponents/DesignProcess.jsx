import Arrow from '../../../media/Arrow';

const DesignProcess = () => {
  return (
    <>
      <div className='my-7 ' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>DESIGN PROCESS</h1>
        <div className='Contents mt-4'>
          <div className=' dpflex'>
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
    </>
  );
};

export default DesignProcess;
