import React from 'react';
import Card from './components/Card';
import { BsCircleFill } from 'react-icons/bs';
import { TfiRulerAlt2 } from 'react-icons/tfi';
import { FaRegEdit } from 'react-icons/fa';
import Timeline from './components/Timeline';

export const metadata = {
  title: 'About | Portfolio Wladmir',
};

const About = () => {
  const abilities = [
    {
      title: 'Web Development',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius debitis quia dolorum non magnam',
    },
    {
      title: 'Mobile Development',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius debitis quia dolorum non magnam',
    },
    {
      title: 'Marketing',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius debitis quia dolorum non magnam',
    },
    {
      title: 'Web Designer',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius debitis quia dolorum non magnam',
    },
    {
      title: 'Graphic Designer',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius debitis quia dolorum non magnam',
    },
    {
      title: 'UX / UI Designer',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius debitis quia dolorum non magnam',
    },
  ];

  const education = [
    {
      title: 'AIT University 2023',
      label: 'Software Developer',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius debitis quia dolorum non magnam',
    },
    {
      title: 'FECAP 2007',
      label: 'Marketing and Advertising with major in Graphic Design',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius debitis quia dolorum non magnam',
    },
    {
      title: 'SENAC 2010',
      label: 'Marketing and Advertising with major in Graphic Design',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius debitis quia dolorum non magnam',
    },
  ];

  return (
    <div className=''>
      <section className='min-h-[calc(100vh-154px)] mb-32 flex flex-col justify-center items-center gap-20 '>
        <h2 className='text-5xl font-bold text-center'>
          A little bit about <br /> my aspirations
        </h2>

        <p className='text-center lg:max-w-[60%]'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          eligendi ex laborum inventore quaerat dolore accusamus illo velit
          explicabo, impedit temporibus in quae, itaque expedita doloremque.
          Deleniti tempore ipsum commodi.
        </p>

        <div className='flex flex-col justify-center items-center gap-6 md:grid md:grid-cols-2 lg:grid-cols-3'>
          {abilities.map((ability, index) => (
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
          Education & experience
        </h2>

        <div className='flex flex-col justify-center items-center gap-16 lg:flex-row'>
          <Timeline
            title='Education'
            icon={
              <TfiRulerAlt2
                size={30}
                className='absolute top-[12px] left-[10px]'
              />
            }
            options={education}
          />
          <Timeline
            title='Work Experience'
            icon={
              <FaRegEdit
                size={30}
                className='absolute top-[12px] left-[10px]'
              />
            }
            options={education}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
