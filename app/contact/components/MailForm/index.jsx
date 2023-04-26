'use client';
import React, { useState } from 'react';

const MailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = () => {
    window.open(
      `mailto:'yago.ramiresx@gmail.com?subject=[Contato Portfolio] ${name}&body=${message}`,
    );
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    sendEmail();
  };

  return (
    <div className='flex flex-col justify-center items-center gap-12 w-full md:w-[50%]'>
      <h2 className='text-5xl font-bold text-center'>Ou escreva aqui</h2>

      <form
        className='w-full flex flex-col items-start justify-center gap-4'
        onSubmit={handleSubmitForm}
      >
        <div className='flex flex-col items-center justify-center gap-4 w-full lg:flex-row'>
          <fieldset className='border-[1px] border-black pl-2 w-full lg:w-[50%]'>
            <legend className='px-2'>Seu Nome</legend>
            <input
              type='text'
              className='outline-none pb-2 pr-2'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset className='border-[1px] border-black pl-2 w-full lg:w-[50%]'>
            <legend className='px-2'>Seu E-mail</legend>
            <input
              type='text'
              className='outline-none pb-2 pr-2'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
        </div>
        <div className='w-full'>
          <fieldset className='border-[1px] border-black pl-2 pr-2 w-full'>
            <legend className='px-2'>Sua Mensagem</legend>
            <textarea
              className='resize-none w-full outline-none h-28'
              maxLength={255}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </fieldset>
        </div>
        <input
          type='submit'
          value={'Enviar mensagem'}
          className='px-8 py-4 bg-yellow-500 font-bold cursor-pointer hover:bg-yellow-600 transition-all'
        />
      </form>
    </div>
  );
};

export default MailForm;
