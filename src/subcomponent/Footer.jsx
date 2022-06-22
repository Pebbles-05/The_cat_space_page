import FooterImg from '../media/FooterImg.svg';

const Footer = () => {
  return (
    <div className='mt-48 mb-7'>
      <div className='flex justify-end'>
        <img
          src={FooterImg}
          alt='FooterImg'
          className='w-40 -mb-4'
          srcset=''
        />
      </div>
      <hr />
      <h1 className='font_family_marcellus mt-7'>
        Developed by{' '}
        <span className='text-lg FooterText'>
          Joydeep Paul
        </span>{' '}
        and{' '}
        <span className='text-lg FooterText'>
          Sanket Sarkar
        </span>
      </h1>
    </div>
  );
};

export default Footer;
