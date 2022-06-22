import '../subcomponent_styles/GradientButton.scss';

const GradientButton = ({ title, onPress, selected }) => {
  return (
    <>
      <button
        className={`px-10 py-4 rounded ${
          !selected ? 'bg-black btn-border-style pink-text' : 'text-black button-style btn-shadow '
        }`}
        onClick={onPress}
      >
        <h1 className='text-xl btn-text'>{title}</h1>
      </button>
    </>
  );
};

export default GradientButton;
