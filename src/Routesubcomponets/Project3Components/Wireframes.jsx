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
      <h1 className='Headings'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">WIREFRAMES</h1>
      <div className='Contents mt-1 mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <p>Wireframes for Nekomimi</p>
      </div>
      <div className='p3wfgrid' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <img src={wireframe1} alt='wireframeimg'  />
        <img src={wireframe2} alt='wireframeimg'  />
      
          <img src={wireframe3} alt='wireframeimg'  />
          <img src={wireframe5} alt='wireframeimg'  />
    
 
          <img src={wireframe4} alt='wireframeimg'  />
          <img src={wireframe6} alt='wireframeimg'  />
          <img src={wireframe7} alt='wireframeimg'  />
    
      </div>
    </div>
  );
};

export default Wireframes;
