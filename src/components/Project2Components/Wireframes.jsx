import BhaskarWireframe1 from '../../media/BhaskarWireframe1.svg';
import BhaskarWireframe2 from '../../media/BhaskarWireframe2.svg';
import BhaskarWireframe3 from '../../media/BhaskarWireframe3.svg';
import BhaskarWireframe4 from '../../media/BhaskarWireframe4.svg';
import BhaskarWireframe5 from '../../media/BhaskarWireframe5.svg';
import BhaskarWireframe6 from '../../media/BhaskarWireframe6.svg';

const Wireframes = () => {
  return (
    <div className='my-7'>
      <h1 className='Headings'>WIREFRAMES</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-7 gap-x-20 gap-y-7'>
        <img src={BhaskarWireframe1} alt="" srcset="" />
        <img src={BhaskarWireframe2} alt="" srcset="" />
        <img src={BhaskarWireframe3} alt="" srcset="" />
        <img src={BhaskarWireframe4} alt="" srcset="" />
        <img src={BhaskarWireframe5} alt="" srcset="" />
        <img src={BhaskarWireframe6} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Wireframes;
