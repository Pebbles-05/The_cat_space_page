const Conclusion = () => {
    return ( 
        <>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>NEXT STEPS</h1>
        <div className='Contents mt-1'>
          <ul className='ml-7 list-disc'>
            <li>
              Evaluate the current prototype with the potential users by conducting <span className='pink-text'>usability test</span>
            </li>
            <li>
              Ideate solutions to make it
              <span className='pink-text'>
                {' '}
                accessible by the disabled
              </span>{' '}
              commuters to make the app scalable
            </li>
            <li>
              Explore options to enhance the current
              <span className='pink-text'> revenue system</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>CONCLUSION</h1>
        <div className='Contents mt-1'>
          <p className='mb-2'>
            The process of <span className='pink-text'>gaining user’s trust</span> and making <span className='pink-text'>navigation seamless</span> was executed sucessfully through the designs. There was a <span className='pink-text'>60% increase</span> in app downloads after the redesign
          </p>
        </div>
      </div>
    </>
     );
}
 
export default Conclusion;