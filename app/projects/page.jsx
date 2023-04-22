import React from 'react';
import ProjectCard from './components/ProjectCard';

export const metadata = {
  title: 'Projects | Portfolio Wladmir',
};

const Projects = () => {
  return (
    <section>
      <h2 className='text-5xl font-bold text-center mb-24'>Things I did!</h2>
      <div className='flex justify-center items-center gap-20 mb-8'>
        <h3>as Junior Dev</h3>
        <h3>as Designer</h3>
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <ProjectCard
          name={'Project Name'}
          techs={['react', 'html', 'css', 'javascript']}
        />
        <ProjectCard
          name={'Project Name'}
          techs={['react', 'html', 'css', 'javascript']}
        />
        <ProjectCard
          name={'Project Name'}
          techs={['react', 'html', 'css', 'javascript']}
        />
      </ul>
    </section>
  );
};

export default Projects;
