import React from 'react';
import Card from './Card';
import { abilities } from '../../../mock';

const AbilitiesList = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 md:content-start md:items-start md:grid md:grid-cols-2 lg:grid-cols-3  '>
      {abilities?.map((ability, index) => (
        <Card
          key={index}
          title={ability.title}
          description={ability.description}
        />
      ))}
    </div>
  );
};

export default AbilitiesList;
