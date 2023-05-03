'use client';
import { useForm } from 'react-hook-form';
import { LoginSchema } from './ContactSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const MailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const handleSubmitForm = async (formData) => {
    try {
      const params = {
        from_name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        'service_r2j7j39',
        'template_rffyfww',
        params,
        'tzz2xnGBz8rIMJyyu',
      );

      setValue('name', '');
      setValue('email', '');
      setValue('message', '');

      toast.success('E-mail enviado com sucesso!');
    } catch (e) {
      console.log(e);
      toast.error('Ocorreu um erro, tente novamente');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center gap-12 w-full md:w-[50%]'>
      <h2 className='text-3xl lg:text-6xl font-bold text-center'>
        Ou escreva aqui
      </h2>

      <form
        className='w-full flex flex-col items-start justify-center gap-4'
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className='flex flex-col items-center justify-center gap-4 w-full lg:flex-row '>
          <div className='w-full flex flex-col lg:w-[50%]'>
            <fieldset className='border-[1px] border-black pl-2 w-full '>
              <legend className='px-2'>Seu Nome</legend>
              <input
                type='text'
                className='outline-none pb-2 pr-2'
                {...register('name')}
              />
            </fieldset>
            <p className='text-xs w-full text-red-500 mt-[4px]'>
              {errors?.name?.message}
            </p>
          </div>
          <div className='w-full flex flex-col lg:w-[50%]'>
            <fieldset className='border-[1px] border-black pl-2 w-full '>
              <legend className='px-2'>Seu E-mail</legend>
              <input
                type='text'
                className='outline-none pb-2 pr-2'
                {...register('email')}
              />
            </fieldset>
            <p className='text-xs w-full text-red-500 mt-[4px]'>
              {errors?.email?.message}
            </p>
          </div>
        </div>
        <div className='w-full'>
          <fieldset className='border-[1px] border-black pl-2 pr-2 w-full'>
            <legend className='px-2'>Sua Mensagem</legend>
            <textarea
              className='resize-none w-full outline-none h-28'
              maxLength={255}
              {...register('message')}
            />
          </fieldset>
          <p className='text-xs w-full text-red-500 mt-[4px]'>
            {errors?.message?.message}
          </p>
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
