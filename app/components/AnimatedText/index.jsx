import React from 'react';
import './styles.css';

const AnimatedText = () => {
  return (
    <h2 className='text-3xl lg:text-7xl font-bold text-center text-yellow-500 max-h-12 lg:max-h-[72px] overflow-hidden'>
      <ul>
        <li className='item'>
          <span className='text hidden lg:inline'>Desenvolvedor Front-End</span>
          <span className='text lg:hidden'>Front-End Dev</span>
        </li>
        <li className='item'>
          <span className='text hidden lg:inline'>Desenvolvedor React.JS</span>
          <span className='text lg:hidden'>React.JS Dev</span>
        </li>
        <li className='item'>
          <span className='text hidden lg:inline'>
            Desenvolvedor JavaScript
          </span>
          <span className='text lg:hidden'>JavaScript Dev</span>
        </li>
      </ul>
    </h2>
  );
};

export default AnimatedText;
