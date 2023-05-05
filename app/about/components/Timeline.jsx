import React from 'react';
import TimelineCard from './TimelineCard';
import { BsCircleFill } from 'react-icons/bs';

const Timeline = ({ title, icon, options }) => {
  return (
    <div className='w-full'>
      <div className='flex items-center justify-start gap-4'>
        <div className='relative'>
          <BsCircleFill size={35} className='text-yellow-500' />
          {icon}
        </div>
        <h3 className='font-semibold text-xl'>{title}</h3>
      </div>
      <div className='border-l-2 border-black dark:border-yellow-500 mt-2 ml-4 h-10' />
      <ul className='border-l-2 border-black dark:border-yellow-500 ml-4'>
        {options.map((option, index) => (
          <TimelineCard key={index} option={option} />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
