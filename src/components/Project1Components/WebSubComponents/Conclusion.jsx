const Conclusion = () => {
  return (
    <>
      <div className='my-7'>
        <h1 className='Headings'>NEXT STEPS</h1>
        <div className='Contents mt-1'>
          <ul className='ml-7 list-disc'>
            <li>
              Evaluate the current prototype with the potential users by
              conducting usability test
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
      <div className='my-7'>
        <h1 className='Headings'>CONCLUSION</h1>
        <div className='Contents mt-1'>
          <p className='mb-2'>
            Zifcare not only ensures users to understand the problems they are
            dealing with but also provide features to deal with it. The redesign
            resulted in the
            <span className='pink-text'> increase of traffic by 60%</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Conclusion;
