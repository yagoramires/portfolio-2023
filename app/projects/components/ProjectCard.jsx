import Image from 'next/image';
import React from 'react';

const ProjectCard = ({ name, techs, preview }) => {
  return (
    <li className='w-[280px] h-[280px] overflow-hidden relative group cursor-pointer'>
      <div className='w-[280px] h-[280px] absolute top-0 left-0 bg-[rgba(255,255,255,0.85)] hidden group-hover:flex flex-col justify-center items-center gap-4'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <div className='flex items-center gap-2 justify-center'>
          {techs.map((tech, index) => (
            <Image
              key={index}
              src={
                tech === 'html'
                  ? '/html.svg'
                  : tech === 'css'
                  ? '/css.svg'
                  : tech === 'javascript'
                  ? '/javascript.svg'
                  : tech === 'react'
                  ? '/react.svg'
                  : tech === 'tailwind'
                  ? '/tailwind.svg'
                  : '/html.svg'
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
        src={preview}
        width={200}
        height={300}
        alt='card'
        className='w-[280px] h-[280px] object-cover'
      />
    </li>
  );
};

export default ProjectCard;
