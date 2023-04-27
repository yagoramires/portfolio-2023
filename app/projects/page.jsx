import ProjectList from './components/ProjectList';

export const metadata = {
  title: 'Projetos | Portfolio Yago',
};

const Projects = () => {
  return (
    <section>
      <h2 className='text-5xl font-bold text-center mb-24'>
        Coisas que eu fiz!
      </h2>

      <ProjectList />
    </section>
  );
};

export default Projects;
