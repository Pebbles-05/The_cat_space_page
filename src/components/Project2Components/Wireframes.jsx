import BhaskarWireframe1 from '../../media/BhaskarWireframe1.svg';
import BhaskarWireframe2 from '../../media/BhaskarWireframe2.svg';
import BhaskarWireframe3 from '../../media/BhaskarWireframe3.svg';
import BhaskarWireframe4 from '../../media/BhaskarWireframe4.svg';
import BhaskarWireframe5 from '../../media/BhaskarWireframe5.svg';
import BhaskarWireframe6 from '../../media/BhaskarWireframe6.svg';
import Carousal from "../../subcomponent/carousal";

const Wireframes = () => {

const data=[BhaskarWireframe1,BhaskarWireframe2,BhaskarWireframe3,BhaskarWireframe4,BhaskarWireframe5,BhaskarWireframe6]

  return (
    <div className='my-7'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
      <h1 className='Headings mb-5'>WIREFRAMES</h1>
      <Carousal  data={data}/>
    </div>
  );
};

export default Wireframes;
