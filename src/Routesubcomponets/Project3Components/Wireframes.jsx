import Imagecomp from "../../subcomponent/imagecomp";

const Wireframes = () => {


   const num7=[1,2,3,4,5,6];

  return (
    <div className='my-7'>
      <h1 className='Headings'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">WIREFRAMES</h1>
      <div className='Contents mt-1 mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <p>Wireframes for Nekomimi</p>
      </div>
      <div className='p3wfgrid' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
      
      <Imagecomp path="p3_wfimg" num={num7}  />
    
      </div>
    </div>
  );
};

export default Wireframes;
