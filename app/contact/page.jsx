import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { TfiLinkedin } from 'react-icons/tfi';

export const metadata = {
  title: 'Contact | Portfolio Wladmir',
};

const Contact = () => {
  return (
    <section className='flex flex-col items-start justify-center gap-12 min-h-full md:flex-row w-full'>
      <div className='flex flex-col justify-center items-center gap-12 w-full md:w-[50%] mb-6 md:mb-0'>
        <h2 className='text-5xl font-bold text-center'>Get in touch</h2>

        <div className='flex flex-col justify-center items-center gap-2'>
          <p className='font-medium'>wladmir.wf@gmail.com</p>
          <p className='font-medium'>+61 449 162 083</p>
        </div>

        <div className='flex items-center justify-center gap-8'>
          <Link href={'https://www.linkedin.com/'} target='_blank'>
            <TfiLinkedin size={30} />
          </Link>
          <Link href={'https://github.com/'} target='_blank'>
            <BsGithub size={30} />
          </Link>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-12 w-full md:w-[50%]'>
        <h2 className='text-5xl font-bold text-center'>Or just type here</h2>

        <form className='w-full flex flex-col items-start justify-center gap-4'>
          <div className='flex flex-col items-center justify-center gap-4 w-full lg:flex-row'>
            <fieldset className='border-[1px] border-black pl-2 w-full lg:w-[50%]'>
              <legend className='px-2'>Your Name</legend>
              <input type='text' className='outline-none pb-2 pr-2' />
            </fieldset>
            <fieldset className='border-[1px] border-black pl-2 w-full lg:w-[50%]'>
              <legend className='px-2'>Your E-mail</legend>
              <input type='text' className='outline-none pb-2 pr-2' />
            </fieldset>
          </div>
          <div className='w-full'>
            <fieldset className='border-[1px] border-black pl-2 pr-2 w-full'>
              <legend className='px-2'>Your Message</legend>
              <textarea
                className='resize-none w-full outline-none h-28'
                maxLength={255}
              />
            </fieldset>
          </div>
          <input
            type='submit'
            value={'Send Message'}
            className='px-8 py-4 bg-yellow-600 font-bold cursor-pointer hover:bg-yellow-500 transition-all'
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
