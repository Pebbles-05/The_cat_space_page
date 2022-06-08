import '../subcomponent_styles/GradientButton.scss';

const GradientButton = () => {
  return (
    <>
      <button className='button-style px-10 py-4 rounded-full shadow-lg shadow-pink-200/50'>
        <h1 className='text-black text-xl'>View Submission</h1>
      </button>
    </>
  );
};

export default GradientButton;
