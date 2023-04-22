import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { TfiRulerPencil } from 'react-icons/tfi';

const Card = ({ title, description }) => {
  return (
    <div className='flex items-start justify-center gap-8 w-full'>
      <div className='relative'>
        <BsCircleFill size={35} className='text-yellow-600' />
        <TfiRulerPencil
          size={25}
          className='absolute top-[16px] right-[-3px]'
        />
      </div>
      <div>
        <h3 className='font-xl font-semibold'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
