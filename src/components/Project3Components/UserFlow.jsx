import FlowChart from '../../media/FlowChart.png';

const UserFlow = () => {
  return (
    <>
      <div className='my-7'>
        <h1 className='Headings'>USER FLOW</h1>
        <div className='Contents mt-1'>
          <p>
            I made the user flow on <span className='pink-text'>figjam</span>
          </p>
        </div>
      </div>
      <div className='img-div'>
        <img src={FlowChart} alt='' className='img w-full' />
      </div>
    </>
  );
};

export default UserFlow;
