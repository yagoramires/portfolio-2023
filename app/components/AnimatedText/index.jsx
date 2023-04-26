import React from 'react';
import './styles.css';

const AnimatedText = () => {
  return (
    <h2 className='text-3xl lg:text-7xl font-bold text-center text-yellow-500 max-h-12 lg:max-h-[72px] overflow-hidden'>
      <ul className='dynamic'>
        <li className='item'>
          <span className='text'>Junior Flutter Dev</span>
        </li>
        <li className='item'>
          <span className='text'>Junior Front End Dev</span>
        </li>
        <li className='item'>
          <span className='text'>Senior Art Director</span>
        </li>
      </ul>
    </h2>
  );
};

export default AnimatedText;
