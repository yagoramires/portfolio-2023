import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ project }) => {
  console.log(project.technologies);
  return (
    <li>
      <Link
        href={project.url}
        className='w-[280px] h-[280px] overflow-hidden relative group cursor-pointer'
        target='_bank'
      >
        <div className='w-[280px] h-[280px] absolute top-0 left-0 bg-[rgba(255,255,255,0.85)] hidden group-hover:flex flex-col justify-center items-center gap-4'>
          <h3 className='text-xl font-semibold'>{project.name}</h3>
          <div className='flex items-center gap-2 justify-center'>
            {project?.technologies?.map((technology, index) => (
              <Image
                key={index}
                src={
                  technology.toLowerCase() === 'html'
                    ? '/html.svg'
                    : technology.toLowerCase() === 'css'
                    ? '/css.svg'
                    : technology.toLowerCase() === 'javascript'
                    ? '/javascript.svg'
                    : technology.toLowerCase() === 'react'
                    ? '/react.svg'
                    : technology.toLowerCase() === 'tailwind'
                    ? '/tailwind.svg'
                    : technology.toLowerCase() === 'styled-components'
                    ? '/styled.svg'
                    : technology.toLowerCase() === 'firebase'
                    ? '/firebase.png'
                    : technology.toLowerCase() === 'typescript'
                    ? '/typescript.png'
                    : '/html.svg'
                }
                width={100}
                height={100}
                alt='tech'
                className='w-8 object-contain'
                priority={true}
                unoptimized
              />
            ))}
          </div>
        </div>
        <Image
          src={project.thumb}
          width={200}
          height={300}
          alt='card'
          className='w-[280px] h-[280px] object-cover'
        />
      </Link>
    </li>
  );
};

export default ProjectCard;
