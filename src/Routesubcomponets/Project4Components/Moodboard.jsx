import Imagecomp from "../../subcomponent/imagecomp";

const Moodboard = () => {
  return (
    <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
      <h1 className='Headings'>MOODBOARD</h1>
      <div className='img-div my-7'>
       <Imagecomp path="p4_mb1" num={[""]} className="bigimg hidden md:block" />
       <Imagecomp path="p4_mb2" num={[""]} className="bigimg block md:hidden" />
       

      </div>
    </div>
  );
};

export default Moodboard;
