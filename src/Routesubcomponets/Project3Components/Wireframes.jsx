import Carousal from "../../subcomponent/carousal";

const Wireframes = () => {


   const num6=[1,2,3,4,5,6];

  return (
    <div className='my-7'>
      <h1 className='Headings'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">WIREFRAMES</h1>
      <div className='Contents mt-1 mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <p>Wireframes for Nekomimi</p>
      </div>
      <div className='p3wf' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
      
  
      <Carousal path="p3_wfc1img" num={num6} />
    
      </div>
    </div>
  );
};

export default Wireframes;
