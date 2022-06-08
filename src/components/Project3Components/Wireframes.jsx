import wireframe1 from '../../media/wireframe1.png';
import wireframe2 from '../../media/wireframe2.png';
import wireframe3 from '../../media/wireframe3.png';
import wireframe4 from '../../media/wireframe4.png';
import wireframe5 from '../../media/wireframe5.png';
import wireframe6 from '../../media/wireframe6.png';
import wireframe7 from '../../media/wireframe7.png';
import wireframe8 from '../../media/wireframe8.png';

const Wireframes = () => {
  return (
    <div className='my-7'>
      <h1 className='Headings'>WIREFRAMES</h1>
      <div className='Contents mt-1 mb-4'>
        <p>Wireframes for Nekomimi</p>
      </div>
      <div className='grid grid-colds-1 md:grid-cols-2 gap-4 md:gap-12'>
        <img src={wireframe1} alt='' srcset='' />
        <img src={wireframe2} alt='' srcset='' />
        <div className='grid grid-rows-2 gap-4 md:gap-12'>
          <img src={wireframe3} alt='' srcset='' />
          <img src={wireframe5} alt='' srcset='' />
        </div>
        <div className='grid grid-rows-3 gap-4 -mt-40 md:mt-0 md:gap-0'>
          <img src={wireframe4} alt='' srcset='' />
          <img src={wireframe6} alt='' srcset='' />
          <img src={wireframe7} alt='' srcset='' />
        </div>
      </div>
      <div className='Contents mt-1 mb-4'>
        <p>Wireframe for Torikae</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-4'>
        <img src={wireframe8} alt='' srcset='' />
      </div>
    </div>
  );
};

export default Wireframes;
