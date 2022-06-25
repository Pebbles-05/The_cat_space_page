import creditfooteimg from '../media/creditfooteimg';

const Creditfooter = () => {
  return (
    <div className='mt-7 mb-7'>
      <div >
     
       {creditfooteimg}
      </div>
      <h1 className='font_family_marcellus mt-7'>
        Developed by{' '}
        <span className='text-lg FooterText'>
          Joydeep Paul
        </span>{' '}
        and{' '}
        <span className='text-lg FooterText'>
          Sanket Sarkar
        </span>
      </h1>
    </div>
  );
};

export default Creditfooter;
