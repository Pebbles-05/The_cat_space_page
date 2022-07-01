

const Moodboard = () => {
  return (
    <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
      <h1 className='Headings'>MOODBOARD</h1>
      <div className='img-div my-7'>
        <img
          src={MoodboardWiggle}
          alt='moodboard'
          className='bigimg hidden md:block'
        />
        <img src={MoodboarNeko} alt='' className='bigimg block md:hidden' />
      </div>
    </div>
  );
};

export default Moodboard;
