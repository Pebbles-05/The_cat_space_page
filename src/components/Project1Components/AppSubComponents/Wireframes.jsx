import Wireframe1Project1 from '../../../media/Wireframe1Project1.png';
import Wireframe2Project1 from '../../../media/Wireframe2Project1.png';
import Wireframe3Project1 from '../../../media/Wireframe3Project1.png';
import Wireframe4Project1 from '../../../media/Wireframe4Project1.png';
import Wireframe5Project1 from '../../../media/Wireframe5Project1.png';
import Wireframe6Project1 from '../../../media/Wireframe6Project1.png';
import Wireframe7Project1 from '../../../media/Wireframe7Project1.png';
import Wireframe8Project1 from '../../../media/Wireframe8Project1.png';
import Wireframe9Project1 from '../../../media/Wireframe9Project1.png';
import Imagecomp from '../../../subcomponent/imagecomp';

const Wireframes = () => {
  const wfgriddata= [Wireframe1Project1,Wireframe2Project1,Wireframe3Project1,Wireframe4Project1,Wireframe5Project1,Wireframe6Project1,Wireframe7Project1,Wireframe8Project1,Wireframe9Project1]

  return (
    <>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>WIREFRAMES</h1>
        <div className='Contents mt-1'>
          <p>
            I made low fiedility wireframes for better clarity of what I needed
            to do
          </p>
          <div className='grid wfgrid'>
            <Imagecomp  data={wfgriddata}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wireframes;
