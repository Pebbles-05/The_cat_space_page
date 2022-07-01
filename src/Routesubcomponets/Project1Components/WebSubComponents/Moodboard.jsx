import Imagecomp from '../../../subcomponent/imagecomp';

const Moodboard = () => {
  return (
    <>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>MOODBOARD</h1>
        <div className='Contents my-4'>
          100% color contrast can be
          <span className='pink-text'> eye straining</span> specially for people
          with glasses or aged above 30. Purple and white - the previous color
          palette - had a color conntrast of 94.1%. Hence to create a calm mood
          I changed the background to #F3F1F5 while retaining the brand color,
          making the contrast 80.9%
        </div>
        <div className='img-div my-7'>

          <Imagecomp path="p1wmoodboard1" num={[""]} className="bigimg hidden md:block" />
          <Imagecomp path="p1wmoodboard2new" num={[""]} className="bigimg block md:hidden" />
        
        
      </div>
      </div>
    </>
  );
};

export default Moodboard;
