import React from 'react';

const TimelineCard = ({ option }) => {
  return (
    <li className='relative ml-8 flex flex-col justify-center items-start gap-4'>
      <div className='absolute w-[28px] h-[2px] bg-black top-[13px] left-[-34px]' />
      <h3 className='text-xl font-medium'>{option.name}</h3>
      <span className='text-xs mt-[-8px]'>
        {option.label} - {option.date}
      </span>
      <p className='text-sm'>{option.description}</p>
      <div className='h-12 w-full' />
    </li>
  );
};

export default TimelineCard;
