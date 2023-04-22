'use client';
import React, { useState } from 'react';
import ProjectCard from './components/ProjectCard';

export const metadata = {
  title: 'Projects | Portfolio Wladmir',
};

const Projects = () => {
  const [active, setActive] = useState({
    dev: true,
    designer: false,
  });

  const handleSelectType = () => {
    setActive({
      dev: !active.dev,
      designer: !active.designer,
    });
  };

  const projectsDesigner = [
    {
      preview:
        'https://www.usnews.com/dims4/USNEWS/3baae30/2147483647/thumbnail/640x420/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F53%2F5f%2F9cf8b02c4d2c9f8473a6ca8d15d2%2F171102-graphicdesigner-stock.jpg',
      name: 'Project Name',
      techs: ['tailwind'],
    },
  ];

  const projectsDev = [
    {
      preview:
        'https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022_v2/hero_image_tondominium/hero_image_021522/hero_image_colliersviewpoint_022222.ashx?bid=0f5b3ed2a8de41f89e1a8d557e48f9f8',
      name: 'Project Name',
      techs: ['react', 'html', 'css', 'javascript'],
    },
    {
      preview:
        'https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022_v2/hero_image_tondominium/hero_image_021522/hero_image_colliersviewpoint_022222.ashx?bid=0f5b3ed2a8de41f89e1a8d557e48f9f8',
      name: 'Project Name',
      techs: ['react', 'html', 'css', 'javascript'],
    },
    {
      preview:
        'https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022_v2/hero_image_tondominium/hero_image_021522/hero_image_colliersviewpoint_022222.ashx?bid=0f5b3ed2a8de41f89e1a8d557e48f9f8',
      name: 'Project Name',
      techs: ['react', 'html', 'css', 'javascript'],
    },
    {
      preview:
        'https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022_v2/hero_image_tondominium/hero_image_021522/hero_image_colliersviewpoint_022222.ashx?bid=0f5b3ed2a8de41f89e1a8d557e48f9f8',
      name: 'Project Name',
      techs: ['react', 'html', 'css', 'javascript'],
    },
    {
      preview:
        'https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022_v2/hero_image_tondominium/hero_image_021522/hero_image_colliersviewpoint_022222.ashx?bid=0f5b3ed2a8de41f89e1a8d557e48f9f8',
      name: 'Project Name',
      techs: ['react', 'html', 'css', 'javascript'],
    },
    {
      preview:
        'https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022_v2/hero_image_tondominium/hero_image_021522/hero_image_colliersviewpoint_022222.ashx?bid=0f5b3ed2a8de41f89e1a8d557e48f9f8',
      name: 'Project Name',
      techs: ['react', 'html', 'css', 'javascript'],
    },
  ];

  return (
    <section>
      <h2 className='text-5xl font-bold text-center mb-24'>Things I did!</h2>
      <div className='flex justify-center items-center gap-20 mb-8'>
        <button
          onClick={handleSelectType}
          className={`font-medium text-xl cursor-pointer hover:text-yellow-500 ${
            active.dev ? 'text-yellow-500' : null
          }`}
        >
          as Junior Dev
        </button>
        <button
          onClick={handleSelectType}
          className={`font-medium text-xl cursor-pointer hover:text-yellow-500 ${
            active.designer ? 'text-yellow-500' : null
          }`}
        >
          as Designer
        </button>
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {active.dev &&
          projectsDev.map((project, index) => (
            <ProjectCard
              key={index}
              preview={project.preview}
              name={project.name}
              techs={project.techs}
            />
          ))}
        {active.designer &&
          projectsDesigner.map((project, index) => (
            <ProjectCard
              key={index}
              preview={project.preview}
              name={project.name}
              techs={project.techs}
            />
          ))}
      </ul>
    </section>
  );
};

export default Projects;
