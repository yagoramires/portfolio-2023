import React from 'react';
import Card from './components/Card';
import { TfiRulerAlt2 } from 'react-icons/tfi';
import { FaRegEdit } from 'react-icons/fa';
import Timeline from './components/Timeline';
import { fetchEducation, fetchExperience, fetchAbilities } from '../api/axios';

export const metadata = {
  title: 'Sobre | Portfolio Yago',
};

const About = async () => {
  const abilities = await fetchAbilities();
  const education = await fetchEducation();
  const experience = await fetchExperience();

  console.log(abilities);
  console.log(education);
  console.log(experience);

  return (
    <div className=''>
      <section className='min-h-[calc(100vh-154px)] mb-32 flex flex-col justify-center items-center gap-16 '>
        <h2 className='text-5xl font-bold text-center'>
          Um pouco
          <br /> sobre mim
        </h2>

        <p className='text-center lg:max-w-[60%]'>
          Sou um profissional formado em Contabilidade, mas descobri minha
          paixão pelo desenvolvimento web e decidi mudar de carreira. Desde
          então, venho me dedicando a aprender e aprimorar minhas habilidades
          nessa área. Sou uma pessoa organizada e criativa, o que me ajuda a
          desenvolver soluções inovadoras e eficazes. Além disso, sou proativo e
          focado em alcançar meus objetivos, o que me permite lidar com desafios
          e superar obstáculos. Meu objetivo é me tornar um grande desenvolvedor
          front-end, e estou comprometido em continuar aprendendo e me
          desenvolvendo nessa área para alcançar esse objetivo.
        </p>

        <div className='flex flex-col justify-center items-center gap-6 md:grid md:grid-cols-2 lg:grid-cols-3  '>
          {abilities?.map((ability, index) => (
            <Card
              key={index}
              title={ability.title}
              description={ability.description}
            />
          ))}
        </div>
      </section>
      <section className='min-h-[calc(100vh-154px)]'>
        <h2 className='text-5xl font-bold text-center mb-20 lg:mb-40'>
          Educação & Experiência
        </h2>

        <div className='flex flex-col justify-center items-start gap-16 lg:flex-row'>
          {education && (
            <Timeline
              title='Educação'
              icon={
                <TfiRulerAlt2
                  size={30}
                  className='absolute top-[12px] left-[10px]'
                />
              }
              options={education}
            />
          )}
          {experience && (
            <Timeline
              title='Experiência'
              icon={
                <FaRegEdit
                  size={30}
                  className='absolute top-[12px] left-[10px]'
                />
              }
              options={experience}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
