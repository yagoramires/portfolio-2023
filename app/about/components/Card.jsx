import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { TfiRulerPencil } from 'react-icons/tfi';

const Card = ({ title, description }) => {
  return (
    <div className='flex items-start justify-center gap-8 w-full'>
      <div className='relative'>
        <BsCircleFill size={35} className='text-yellow-500' />
        <TfiRulerPencil
          size={25}
          className='absolute top-[16px] right-[-3px]'
        />
      </div>
      <div className='h-[300px]'>
        <h3 className='text-xl font-semibold mb-4'>{title}</h3>
        <p className='text-sm text-justify overflow-hidden text-ellipsis line-clamp-10'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
