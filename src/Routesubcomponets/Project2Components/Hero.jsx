
const Hero = () => {
  return (
    <>
    <div className="img-div" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
    
      <img loading="eager" src="https://ik.imagekit.io/thecatspace/catspace_media/p2_heroimg.png" alt="img" className="heroimg" />


    </div>
      
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>GOAL</h1>
        <div className='Contents mt-1'>
          <span className='pink-text'>Design a portfolio</span> for Bhaskar
          Dutta who is a blockchain developer
        </div>
      </div>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>CLIENT DEMANDS</h1>
        <div className='Contents mt-1'>
          <ul className='ml-7 list-disc'>
            <li>
              The portfolio should be
              <span className='pink-text'> space</span> themed
            </li>
            <li>
              It should have
              <span className='pink-text'> glowy texts </span> and bright{' '}
              <span className='pink-text'>gradient buttons</span>
            </li>
            <li>
              It should have my experiences in
              <span className='pink-text'> details</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='my-7'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>PROBLEMS IDENTIFIED</h1>
        <div className='Contents mt-1'>
          <ul className='ml-7 list-disc'>
            <li>
              The portfolio was supposed to have a
              <span className='pink-text'>
                {' '}
                substantial amount of text content
              </span>
            </li>
            <li>
              I had to find a<span className='pink-text'> balance</span> between
              texts and visuals
            </li>
            <li>
              I had to make the
              <span className='pink-text'> navigation reasonable</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='my-7'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>USER RESEARCH</h1>
        <div className='Contents mt-1'>
          <p>
            Primary Research - I conducted
            <span className='pink-text'> 1 : 1 interviews </span>with recruiters
            and HRs who I knew in my family or neighborhood
          </p>
          <p className='mt-4'>
            Secondary Research - I looked for{' '}
            <span className='pink-text'>inspiration</span> on how to make a
            space themed portfolio from{' '}
            <span className='pink-text'>dribbble</span>, space artworks in{' '}
            <span className='pink-text'>devianart</span> and
            <span className='pink-text'> behance</span>. I also watched a lot of
            youtube videos on how to make a portfolio and what are the key
            points one should focus on for a developer
          </p>
        </div>
      </div>
      <div className='my-7'  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>IDEATION</h1>
        <div className='Contents mt-1'>
          <p>After interviewing 5 recruiters I summed up -</p>
          <ul className='ml-7 list-disc'>
            <li>They go through dozens of portfolios a day</li>
            <li>The hero section makes a lot of impact</li>
            <li>
              They prioritize - experience {'>'} projects {'>'} skills {'>'}{' '}
              articles {'>'} achievements
            </li>
          </ul>
          <p className='mt-4'>
            In order to stand out of the crowd and keep viewers engrossed in the
            portfolio I decided to potray a passive{' '}
            <span className='pink-text'>story tone</span> throughout the
            portfolio where a viewer would be a visitor on his spaceship. I
            <span className='pink-text'>
              {' '}
              personified Bhaskar as a spaceboy
            </span>{' '}
            who would go around planets to work. I also personified two friends
            who take care of documenting his work.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
