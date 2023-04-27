'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../../mock';
import ProjectDetails from './ProjectDetails';

const ProjectList = () => {
  const [project, setProject] = useState(null);

  return (
    <>
      {!project && (
        <>
          <h2 className='text-5xl font-bold text-center mb-16'>
            Coisas que eu fiz!
          </h2>
          <div className='flex justify-center items-center gap-20 mb-8'>
            <button
              className={`font-medium text-xl cursor-pointer text-yellow-600`}
            >
              como desenvolvedor Jr
            </button>
            {/* <button
          onClick={handleSelectType}
          className={`font-medium text-xl cursor-pointer hover:text-yellow-500 ${
            active.designer ? 'text-yellow-500' : null
          }`}
          >
          as Designer
        </button> */}
          </div>
        </>
      )}

      {project && <ProjectDetails project={project} setProject={setProject} />}
      {/* {active.designer &&
                projects?.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))} */}

      {!project && (
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {
            // active.dev &&
            projects?.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                setProject={setProject}
              />
            ))
          }
        </ul>
      )}
    </>
  );
};

export default ProjectList;
