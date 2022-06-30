import Arrow from '../../media/Arrow';

const DesignProcess = () => {
  return (
    <>
      <div className='my-7'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>DESIGN PROCESS</h1>
        <div className='Contents mt-4'>
          <div className='dpflex'>
            <div className='flex justify-center  step'>
              <p>Ideate</p>
            </div>
            <div className='arrow'>
              {Arrow}
            </div>
            <div className='flex justify-center step'>
              <p>Design Iteration 1</p>
            </div>
            <div className='arrow'>
              {Arrow}
            </div>
            <div className='flex justify-center step'>
              <p>User Testing</p>
            </div>
            <div className='arrow'>
              {Arrow}
            </div>
            <div className='flex justify-center step'>
              <p>Design Iteration 2</p>
            </div>
            <div className='arrow'>
              {Arrow}
            </div>
            <div className='flex justify-center step'>
              <p>Deliver</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignProcess;
