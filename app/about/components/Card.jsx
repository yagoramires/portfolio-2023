'use client';
import React, { useState, useRef } from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { TfiRulerPencil } from 'react-icons/tfi';

const Card = ({ title, description }) => {
  const [showFullText, setShowFullText] = useState(false);

  const cardRef = useRef(null);

  const handleShowFullText = () => {
    setShowFullText(!showFullText);
    cardRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className='relative flex items-start justify-center gap-8 w-full cursor-pointer pt-8'
      onClick={handleShowFullText}
      ref={cardRef}
    >
      <div className='relative'>
        <BsCircleFill size={35} className='text-yellow-500' />
        <TfiRulerPencil
          size={25}
          className='absolute top-[16px] right-[-3px]'
        />
      </div>
      <div className='min-h-[200px]'>
        <h3 className='text-xl font-semibold mb-4'>{title}</h3>
        <p
          className={`text-sm text-justify overflow-hidden text-ellipsis ${
            showFullText ? 'line-clamp-100' : 'line-clamp-5'
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
