
import Imagecomp from '../../../subcomponent/imagecomp';

const Wireframes = () => {
  const num6= ['','','','','','','','',''];

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
            <Imagecomp  path="p1awfimg1" num={num6}  className="img"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wireframes;
