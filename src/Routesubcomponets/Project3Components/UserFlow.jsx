

const UserFlow = () => {
  return (
    <>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>USER FLOW</h1>
        <div className='Contents mt-1'>
          <p>
            I made the user flow on <span className='pink-text'>figjam</span>
          </p>
        </div>
      </div>
      <div className='img-div' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <img src={FlowChart} alt='' className='ufimg' />
      </div>
    </>
  );
};

export default UserFlow;
