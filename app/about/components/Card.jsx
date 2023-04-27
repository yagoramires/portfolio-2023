'use client';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { TfiRulerPencil } from 'react-icons/tfi';

const Card = ({ ability }) => {
  const [showFullText, setShowFullText] = useState(false);

  const cardRef = useRef(null);

  const handleShowFullText = () => {
    setShowFullText(!showFullText);
    cardRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  console.log(ability);
  return (
    <div
      className='relative flex items-start justify-center gap-8 w-full cursor-pointer pt-8'
      onClick={handleShowFullText}
      ref={cardRef}
    >
      {/* <div className='relative'>
        <BsCircleFill size={35} className='text-yellow-500' />
        <TfiRulerPencil
          size={25}
          className='absolute top-[16px] right-[-3px]'
        />
      </div> */}

      <Image
        src={
          ability?.icon?.toLowerCase() === 'html'
            ? '/html.svg'
            : ability?.icon?.toLowerCase() === 'css'
            ? '/css.svg'
            : ability?.icon?.toLowerCase() === 'next'
            ? '/next.svg'
            : ability?.icon?.toLowerCase() === 'javascript'
            ? '/javascript.svg'
            : ability?.icon?.toLowerCase() === 'react'
            ? '/react.svg'
            : ability?.icon?.toLowerCase() === 'tailwind'
            ? '/tailwind.svg'
            : ability?.icon?.toLowerCase() === 'styled-components'
            ? '/styled.svg'
            : ability?.icon?.toLowerCase() === 'firebase'
            ? '/firebase.png'
            : ability?.icon?.toLowerCase() === 'typescript'
            ? '/typescript.png'
            : ability?.icon?.toLowerCase() === 'axios'
            ? '/axios.svg'
            : '/html.svg'
        }
        width={100}
        height={100}
        alt='tech'
        className={` ${
          ability?.icon?.toLowerCase() === 'axios' ? 'w-12' : 'w-8'
        } object-contain`}
        priority={true}
      />
      <div
        className={` ${
          ability?.icon?.toLowerCase() === 'axios' && 'ml-[-16px]'
        } min-h-[200px]`}
      >
        <h3 className='text-xl font-semibold mb-4'>{ability.title}</h3>
        <p
          className={`text-sm text-justify overflow-hidden text-ellipsis ${
            showFullText ? 'line-clamp-100' : 'line-clamp-5'
          }`}
        >
          {ability.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
