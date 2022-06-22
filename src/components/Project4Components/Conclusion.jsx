import GradientButton from '../../subcomponent/GradientButton';

const Conclusion = () => {
  return (
    <div className='mt-20'>
      <div className='flex justify-center'>
        <GradientButton title={'View Prototype'} selected={true} />
      </div>
      <div className='my-7'>
        <h1 className='Headings'>NEXT STEPS</h1>
        <div className='Contents mt-1'>
          <ul className='ml-7 list-disc'>
            <li>
              Add a “<span className='pink-text'>report a profile</span> “ with
              evidence feature to avoid pet violations
            </li>
            <li>
              Add<span className='pink-text'> autopay</span> system - as soon as
              a wiggler finishes a job, he gets his payment
            </li>
            <li>
              Add a “ <span className='pink-text'>hire me</span> “ feature where
              a user can hire a wiggler to walk their pet or drop him at the
              creche. The payments could be done using a{' '}
              <span className='pink-text'>monthly autopay</span> system
            </li>
            <li>
              Add a<span className='pink-text'> expense tracker</span> feature -
              for wiggler parents and{' '}
              <span className='pink-text'>income tracker</span> feature - for
              wigglers
            </li>
          </ul>
        </div>
      </div>
      <div className='my-7'>
        <h1 className='Headings'>CONCLUSION</h1>
        <div className='Contents mt-1'>
          <ul className='ml-7 list-disc'>
            <li>
              This app would help users to find the
              <span className='pink-text'> wiggler who fit just right </span>{' '}
              for their pets.
            </li>
            <li>
              The bio, reviews, pictures and tracking a wiggle features help to{' '}
              <span className='pink-text'> gain trust</span> on the association
              or person. The chat section is the second layer to gaining trust.
            </li>
            <li>
              The one - way search system helps wiggle parents to
              <span className='pink-text'> decide</span> what is the best and
              <span className='pink-text'>
                {' '}
                avoids posiiblity of spam texts
              </span>
            </li>
            <li>
              The schedule section helps to
              <span className='pink-text'>{' '}stay organised</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
