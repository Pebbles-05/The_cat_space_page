

const Hero = () => {
  return (
    <>
      <div className='img-div heroimg-div' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <img loading="eager" src="https://ik.imagekit.io/thecatspace/catspace_media/placeholder.png" alt='' className='heroimg' />
      </div>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>PROJECT BRIEF</h1>
        <div className='Contents mt-1'>
          Wiggle is a personal project where pet parents can find a{' '}
          <span className='pink-text'>creche</span> or
          <span className='pink-text'> pet walking buddy</span> - chat ,
          schedule an appointment and pay through the same
        </div>
      </div>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>GOAL</h1>
        <div className='Contents mt-1'>
          <ul className='ml-7 list-disc'>
            <li>
              Design a platform that would allow pet owners to
              <span className='pink-text'> go out on a vacation </span>tension
              free
            </li>
            <li>
              Potential pet lovers can finally
              <span className='pink-text'> get a pet </span>without any second
              questions
            </li>
          </ul>
        </div>
      </div>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>PROBLEMS IDENTIFIED</h1>
        <div className='Contents mt-1'>
          <ul className='ml-7 list-disc'>
            <li>
              My parents didn’t allow me to adopt a cat because there is
              <span className='pink-text'> no creche in my small town</span>
            </li>
            <li>
              My aunt, who left her cat once at a creche, now has
              <span className='pink-text'> trust issues </span>because of the
              bad service
            </li>
            <li>
              My cousin didn’t want to put her dog in a creche with other dogs
              because of the
              <span className='pink-text'> fear of mites</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>POSSIBILITIES</h1>
        <div className='Contents mt-1'>
          <ul className='ml-7 list-disc'>
            <li>Creche or Home finding app</li>
            <li>Pet grooming app</li>
            <li>Vet consultation or booking app</li>
            <li>Pet vaccine and suppliments reminder app</li>
          </ul>
        </div>
      </div>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>USER RESEARCH</h1>
        <div className='Contents mt-1'>
          I conducted
          <span className='pink-text'> 1:1 interviews </span>with 5 pet owners
          to dive deep into the problem
        </div>
      </div>
      <div className='my-7' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
        <h1 className='Headings'>IDEATION</h1>
        <div className='Contents mt-1'>
          <p>
            I summed up the 2 major problems and decided to embed them into an
            app -
          </p>
          <ul className='ml-7 list-disc'>
            <li>
              Finding the perfect
              <span className='pink-text'> creche</span>
            </li>
            <li>
              Taking out your pet for a<span className='pink-text'> walk</span>
            </li>
          </ul>
          <div className='my-7'>
            <p className='my-4'>
              <span className='pink-text'>Problem 1 </span>: Finding the perfect
              creche based on a pet behaviour
            </p>
            <div className='my-4'>
              <span className='pink-text'>Ideation </span>: I summed up 2 pet
              behaviours through my interviews -
              <ol className='ml-7 list-decimal'>
                <li>
                  The silent pet - loves to enjoy their personal space (
                  specially cats )
                </li>
                <li>
                  The playful pet - loves to be around other pets and play all
                  day long
                </li>
              </ol>
            </div>
            <p className='my-4'>
              <span className='pink-text'>Solution </span>: Both associations
              and people would be able to make an account in the platform. A pet
              parent can use filters to ease their search, Later they would be
              able to chat, schedule appointments and also pay through the
              platform
            </p>
          </div>
          <div className='my-10'>
            <p className='my-4'>
              <span className='pink-text'>Problem 2 </span>: Pet fat buildup
              leading to complications. Responsible factors include - food
              habits and lack of exercise
            </p>
            <p className='my-4'>
              <span className='pink-text'>Ideation </span>: Even though food
              habits could be changed with a vet’s advice, many owners didnt get
              the time to walk / exercise their pets
            </p>
            <p className='my-4'>
              <span className='pink-text'>Solution </span>: I decided to add a
              dedicated section for finding people / associations who would walk
              pets
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
