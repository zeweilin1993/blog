import './index.scss';
import { useState } from 'react';
import { IToggleProps } from './type';

function Toggle(props: IToggleProps) {
  const [toggleClassName, setToggleClassName] = useState('toggle');

  const changeToggle = () => {
    setToggleClassName(
      toggleClassName === 'toggle' ? 'toggle toggled' : 'toggle'
    );

    props.callBackToggled?.(!(toggleClassName === 'toggle'));
  };

  return (
    <div className={toggleClassName} onClick={changeToggle}>
      <div className='toggle_body'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
          return <div className={`bars bars_${number}`} key={number}></div>;
        })}
      </div>
    </div>
  );
}

export default Toggle;
