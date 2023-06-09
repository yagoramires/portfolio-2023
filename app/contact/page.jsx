import Link from 'next/link';
import React from 'react';
import { BsGithub, BsWhatsapp } from 'react-icons/bs';
import { TfiLinkedin } from 'react-icons/tfi';
import MailForm from './components/MailForm';

export const metadata = {
  title: 'Contato | Portfolio Yago',
};

const Contact = () => {
  return (
    <section className='flex flex-col items-start justify-center gap-12 min-h-full md:flex-row w-full'>
      <div className='flex flex-col justify-center items-center gap-12 w-full md:w-[50%] mb-6 md:mb-0'>
        <h2 className='text-3xl lg:text-6xl font-bold text-center'>
          Entre em contato
        </h2>

        <div className='flex flex-col justify-center items-center gap-2'>
          <p className='font-medium'>yago.ramiresx@gmail.com</p>
          <p className='font-medium'>+55 21 96971-1937</p>
        </div>

        <div className='flex items-center justify-center gap-8'>
          <Link
            href={'https://www.linkedin.com/in/yagoramires'}
            target='_blank'
          >
            <TfiLinkedin
              size={30}
              className='hover:text-yellow-500 transition-all'
            />
          </Link>
          <Link href={'https://github.com/yagoramires'} target='_blank'>
            <BsGithub
              size={30}
              className='hover:text-yellow-500 transition-all'
            />
          </Link>
          <Link
            href={
              'https://wa.me/5521969711937?text=Ol%C3%A1%2C+estou+entrando+em+contato+atrav%C3%A9s+do+seu+portf%C3%B3lio+...'
            }
            target='_blank'
          >
            <BsWhatsapp
              size={30}
              className='hover:text-yellow-500 transition-all'
            />
          </Link>
        </div>
      </div>

      <MailForm />
    </section>
  );
};

export default Contact;
