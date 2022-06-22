import Wireframe1Project1 from '../../../media/Wireframe1Project1.png';
import Wireframe2Project1 from '../../../media/Wireframe2Project1.png';
import Wireframe3Project1 from '../../../media/Wireframe3Project1.png';
import Wireframe4Project1 from '../../../media/Wireframe4Project1.png';
import Wireframe5Project1 from '../../../media/Wireframe5Project1.png';
import Wireframe6Project1 from '../../../media/Wireframe6Project1.png';
import Wireframe7Project1 from '../../../media/Wireframe7Project1.png';
import Wireframe8Project1 from '../../../media/Wireframe8Project1.png';
import Wireframe9Project1 from '../../../media/Wireframe9Project1.png';

const Wireframes = () => {
  return (
    <>
      <div className='my-7'>
        <h1 className='Headings'>WIREFRAMES</h1>
        <div className='Contents mt-1'>
          <p>
            I made low fiedility wireframes for better clarity of what I needed
            to do
          </p>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-2'>
            <div className='img-div pt-7 md:py-10 md:px-20'>
              <img src={Wireframe1Project1} alt='' className='img' />
            </div>
            <div className='img-div pt-7 md:py-10 md:px-20'>
              <img src={Wireframe2Project1} alt='' className='img' />
            </div>
            <div className='img-div pt-7 md:py-10 md:px-20'>
              <img src={Wireframe3Project1} alt='' className='img' />
            </div>
            <div className='img-div pt-7 md:py-10 md:px-20'>
              <img src={Wireframe4Project1} alt='' className='img' />
            </div>
            <div className='img-div pt-7 md:py-10 md:px-20'>
              <img src={Wireframe5Project1} alt='' className='img' />
            </div>
            <div className='img-div pt-7 md:py-10 md:px-20'>
              <img src={Wireframe6Project1} alt='' className='img' />
            </div>
            <div className='img-div pt-7 md:py-10 md:px-20'>
              <img src={Wireframe7Project1} alt='' className='img' />
            </div>
            <div className='img-div pt-7 md:py-10 md:px-20'>
              <img src={Wireframe8Project1} alt='' className='img' />
            </div>
            <div className='img-div pt-7 md:py-10 md:px-20'>
              <img src={Wireframe9Project1} alt='' className='img' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wireframes;
