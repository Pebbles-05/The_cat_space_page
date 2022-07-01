import Carousal from "../../subcomponent/carousal";

const Wireframes = () => {

const num6=["","","","","",""];

  return (
    <div className='my-7'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
      <h1 className='Headings mb-5'>WIREFRAMES</h1>
      <Carousal path="p2c1img1"  num={num6}/>
    </div>
  );
};

export default Wireframes;
