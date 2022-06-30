import Arrow from '../../media/Arrow';

const DesignProcess = () => {
  return (
    <>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>DESIGN PROCESS</h1>
        <div className='Contents mt-4'>
          <div className='dpflex'>
            <div className='  step'>
              <p className='dptext'>Discover</p>
              <p className=' dptext  pink-text'>
                User Interviews
              </p>
            </div>
           <div className="arrow">{Arrow}</div>
            <div className='  step'>
              <p className='dptext'>Ideate</p>
              <p className=' dptext  pink-text'>
                Define problems and brainstorm solutions
              </p>
            </div>
           <div className="arrow">{Arrow}</div>
            <div className='  step'>
              <p className='dptext'>
                Wireframe Iteration 1
              </p>
              <p className=' dptext  pink-text'>
                Design the solutions ideated
              </p>
            </div>
           <div className="arrow">{Arrow}</div>
            <div className='  step'>
              <p className='dptext'>Usability Testing</p>
              <p className=' dptext  pink-text'>
                Test wireframes with users
              </p>
            </div>
           <div className="arrow">{Arrow}</div>
            <div className='  step'>
              <p className='dptext'>
                Wireframe Iteration 2
              </p>
              <p className=' dptext  pink-text'>
                Design the changes required
              </p>
            </div>
           <div className="arrow">{Arrow}</div>
            <div className='  step'>
              <p className='dptext'>Final Screens</p>
              <p className=' dptext  pink-text'>
                Includes logo, colors, typography and high - fiedility screens
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignProcess;
