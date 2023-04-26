import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { TfiLinkedin } from 'react-icons/tfi';
import MailForm from './components/MailForm';

export const metadata = {
  title: 'Contato | Portfolio Yago',
};

const Contact = () => {
  function enviarEmail() {
    var email = 'exemplo@email.com';
    var assunto = 'Olá!';
    var corpo = 'Este é um email de teste enviado usando JavaScript.';
    window.open('mailto:' + email + '?subject=' + assunto + '&body=' + corpo);
  }

  return (
    <section className='flex flex-col items-start justify-center gap-12 min-h-full md:flex-row w-full'>
      <div className='flex flex-col justify-center items-center gap-12 w-full md:w-[50%] mb-6 md:mb-0'>
        <h2 className='text-5xl font-bold text-center'>Entre em contato</h2>

        <div className='flex flex-col justify-center items-center gap-2'>
          <p className='font-medium'>yago.ramiresx@gmail.com</p>
          <p className='font-medium'>+55 21 91971-1937</p>
        </div>

        <div className='flex items-center justify-center gap-8'>
          <Link
            href={'https://www.linkedin.com/in/yagoramires'}
            target='_blank'
          >
            <TfiLinkedin size={30} />
          </Link>
          <Link href={'https://github.com/yagoramires'} target='_blank'>
            <BsGithub size={30} />
          </Link>
        </div>
      </div>

      <MailForm />
    </section>
  );
};

export default Contact;
