import Imagecomp from "../../subcomponent/imagecomp";

const Moodboard = () => {
  return (
    <div className='my-7'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
      <h1 className='Headings'>MOODBOARD</h1>
      <div className='img-div mt-7'>
        <Imagecomp path="p2_mb1" num={[""]}  className="bigimg w-full hidden md:block" />
        <Imagecomp path="p2_mb2new" num={[""]}  className="bigimg w-full md:hidden block" />
      </div>
    </div>
  );
};

export default Moodboard;
