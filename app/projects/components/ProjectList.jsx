'use client';
import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../../mock';

const ProjectList = () => {
  // const [active, setActive] = useState({
  //   dev: true,
  //   designer: false,
  // });

  // const [projects, setProjects] = useState([]);

  // const handleSelectType = () => {
  //   setActive({
  //     dev: !active.dev,
  //     designer: !active.designer,
  //   });
  // };

  // useEffect(() => {
  //   (async () => {
  //     const projectsFetch = await fetchProjects();
  //     setProjects(projectsFetch);
  //   })();
  // }, []);

  return (
    <>
      <div className='flex justify-center items-center gap-20 mb-8'>
        <button
          // onClick={handleSelectType}
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
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
        {
          // active.dev &&
          projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        }
        {/* {active.designer &&
          projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))} */}
      </ul>
    </>
  );
};

export default ProjectList;
