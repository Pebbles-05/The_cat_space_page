import creditfooterimg from '../media/creditfooterimg';

const Creditfooter = () => {
  return (
    <div className='creditfooter' data-aos="fade" data-aos-duration="1000" data-aos-once="true" data-aos-offset="0">
      <div>
      <div className='flex justify-end'>
      {creditfooterimg}
      </div>
      <hr />
      </div>
     
      <h1>
        Developed by <a href='' >Joydeep Paul</a> and <a href=''>Sanket Sarkar</a>
      </h1>
    </div>
  );
};

export default Creditfooter;
