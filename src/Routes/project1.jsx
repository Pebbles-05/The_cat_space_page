import React, { useState } from 'react';
import Project1Web from '../components/Project1Components/project1Web';
import Project1App from '../components/Project1Components/project1App';
import GradientButton from '../subcomponent/GradientButton';

export default function Project1() {
  const [isactive, setisactive] = useState(0);

  return (
    <div className='container ml-auto mr-auto px-3 md:mx-auto'>
      <div className='grid grid-cols-2 gap-4 mt-32 mb-16'>
        <div className='p-5 flex justify-center'>
          <GradientButton
            title={'zifcare web'}
            onPress={() => {
              setisactive(0);
            }}
            selected={isactive === 0}
          />
        </div>
        <div className='p-5 flex justify-center'>
          <GradientButton
            title={'zifcare app'}
            onPress={() => {
              setisactive(1);
            }}
            selected={isactive === 1}
          />
        </div>
      </div>
      {isactive === 0 ? <Project1Web /> : <Project1App />}
    </div>
  );
}
