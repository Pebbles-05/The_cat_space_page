import Carousal  from '../../../subcomponent/carousal';
import Imagecomp from '../../../subcomponent/imagecomp';

const FinalScreens = () => {
  const num3=[1,2,3];
  const num4=[1,2,3,4];
  const num6=[1,2,3,4,5,6];
  
  return (
    <>
      <div className='my-7'>
        <h1 className='Headings'data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">FINAL SCREENS</h1>
        <div className='Contents my-2' >
          <p className='my-4' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            I followed the process of{' '}
            <span className='pink-text'>adaptive design</span>. I designed screens
            for both website and phone
          </p>
          <p className='my-4' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>View live page</span> -{' '}
            <a target="_blank" href='https://zifcare.com/'>zifcare.com</a>
          </p>
          <p className='my-4' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>HERO SECTION</span> - The background
            lotus is a floating image that stays still while scrolling through
            the pages.
          </p>
          <div className='img-div my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">

              <Imagecomp path="p1w_fsimg1" num={['']}  className="img"/>



          </div>
          <p className='my-4' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>PROFILE DASHBOARD</span> - The profile
            dashboard for making navigation through saved items easy
          </p>
          <div className='img-div my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            
            
          <Imagecomp path="p1w_fsimg2" num={['']}  className="img"/>
          
          
          
          </div>
          <p className='my-4' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>ORGANIZATION SIGN-UP SECTIONS -</span>
          </p>
          <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
           
           
           
            <Carousal path="p1w_fsc1img"  num={num3} />
          
          
          
          </div>
          <p className='my-4' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>BOOKING A CONSULTANT STEPS - </span>
          </p>
          <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
           
           
          <Carousal path="p1w_fsc2img"  num={num4} />
         
         
          </div>
          <p className='my-4' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>JOURNAL ENTRY SECTIONS </span> - It is
            basically a digital diary
          </p>
          <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
           
           
          <Carousal path="p1w_fsc3img"  num={num3} />
         
         
         
          </div>
          <p className='my-4' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>CONTENT SCREENS</span> - I added card
            hover animations for all content cards
          </p>
          <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
           
           
          <Carousal path="p1w_fsc4img"  num={num3} />
          
          
          
          </div>
          <p className='my-4' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>AUTHOR SCREEN</span> - A screen that
            sums up all the content written by a author in zifcare
          </p>
          <div className='img-div my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          
          
          <Imagecomp path="p1w_fsimg3" num={['']}  className="img"/>
          
          
          </div>
          <p className='my-4'data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>ZIFCARE GOLD HERO SECTION</span> - I
            redesigned the zifcare gold pitch page for non - gold zifcare users
          </p>
          <div className='my-7'data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            
            
          <Carousal path="p1w_fsc5img"  num={num6} />
          
          
          
          </div>
          <p className='my-4'data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            <span className='pink-text'>UNIQUE PAGINATION</span> - I indepently
            thought an unique pagination idea
          </p>
          <div className='img-div my-7'data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
          
          
          <Imagecomp path="p1w_paginationimg" num={['']}  className="img"/>
          
          
          </div>
          <p className='my-4'data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
            I re-designed the rest of the screens following the style guide I
            defined. No major changes were required.
          </p>
        </div>
      </div>
    </>
  );
};

export default FinalScreens;
