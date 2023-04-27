import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiMinus } from 'react-icons/fi';

const ProjectDetails = ({ project, setProject }) => {
  return (
    <>
      <button
        className='flex items-center gap-[4px] mb-6'
        onClick={() => {
          setProject(null);
        }}
      >
        <FiMinus />
        <span className='font-semibold'>voltar</span>
      </button>
      <div className='min-w-full'>
        <Image
          src={project.demo}
          width={1980}
          height={1080}
          alt='card'
          className='min-w-full object-contain mb-6'
        />
      </div>
      <div className='mb-6'>
        <h2 className='text-4xl font-bold mb-4'>{project.name}</h2>
        <p className='text-justify'>{project.description}</p>
      </div>
      <div className='mb-6'>
        <h2 className=' text-2xl font-bold mb-4'>Features</h2>
        <ul>
          {project.features?.map((feature, index) => (
            <li key={index} className='ml-10 list-disc'>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold mb-4'>Tecnologias</h2>
        <div className='flex items-center justify-start gap-4'>
          {project.technologies?.map((tech, index) => (
            <Image
              key={index}
              src={
                tech.toLowerCase() === 'html'
                  ? '/html.svg'
                  : tech.toLowerCase() === 'css'
                  ? '/css.svg'
                  : tech.toLowerCase() === 'next'
                  ? '/next.svg'
                  : tech.toLowerCase() === 'javascript'
                  ? '/javascript.svg'
                  : tech.toLowerCase() === 'react'
                  ? '/react.svg'
                  : tech.toLowerCase() === 'tailwind'
                  ? '/tailwind.svg'
                  : tech.toLowerCase() === 'styled-components'
                  ? '/styled.svg'
                  : tech.toLowerCase() === 'firebase'
                  ? '/firebase.png'
                  : tech.toLowerCase() === 'axios'
                  ? '/axios.svg'
                  : tech.toLowerCase() === 'typescript'
                  ? '/typescript.png'
                  : '/html.svg'
              }
              width={100}
              height={100}
              alt='tech'
              className='w-8 object-contain'
              priority={true}
              // unoptimized
            />
          ))}
        </div>
      </div>
      <div className='mb-6'>
        <Link href={project.url} target='_bank'>
          <h2 className='text-2xl font-bold mb-4 text-yellow-500'>
            Repositório
          </h2>
        </Link>
      </div>
    </>
  );
};

export default ProjectDetails;
