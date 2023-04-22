import Image from 'next/image';
import React from 'react';

import html from './images/html.svg';
import css from './images/css.svg';
import javascript from './images/javascript.svg';
import react from './images/react.svg';
import tailwind from './images/tailwind.svg';

const ProjectCard = ({ name, techs }) => {
  return (
    <li className='w-[280px] h-[280px] overflow-hidden relative group'>
      <div className='w-[280px] h-[280px] absolute top-0 left-0 bg-[rgba(255,255,255,0.7)] hidden group-hover:flex flex-col justify-center items-center gap-4'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <div className='flex items-center gap-2 justify-center'>
          {techs.map((tech, index) => (
            <Image
              key={index}
              src={
                tech === 'html'
                  ? html
                  : tech === 'css'
                  ? css
                  : tech === 'javascript'
                  ? javascript
                  : tech === 'react'
                  ? react
                  : tech === 'tailwind'
                  ? tailwind
                  : html
              }
              width={100}
              height={100}
              alt='tech'
              className='w-8 object-contain'
            />
          ))}
        </div>
      </div>
      <Image
        src={
          'https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022_v2/hero_image_tondominium/hero_image_021522/hero_image_colliersviewpoint_022222.ashx?bid=0f5b3ed2a8de41f89e1a8d557e48f9f8'
        }
        width={200}
        height={300}
        alt='card'
        className='w-[280px] h-[280px] object-cover'
      />
    </li>
  );
};

export default ProjectCard;
