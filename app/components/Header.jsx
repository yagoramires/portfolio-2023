'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React, { useEffect, useState } from 'react';

import { BiSun, BiMoon } from 'react-icons/bi';
import { BsCircleFill } from 'react-icons/bs';

const Header = () => {
  const path = usePathname();

  const [darkMode, setDarkmode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('@THEME');

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkmode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkmode(false);
    }
  }, [darkMode]);

  const handleDarkMode = () => {
    const theme = localStorage.getItem('@THEME');
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      setDarkmode(false);
      localStorage.removeItem('@THEME');
    } else {
      document.documentElement.classList.add('dark');
      setDarkmode(true);
      localStorage.setItem('@THEME', 'dark');
    }
  };

  return (
    <header className='max-w-[1280px] mx-auto flex flex-col items-center justify-center p-8 lg:flex-row lg:relative dark:bg-zinc-900 dark:text-white'>
      <h1 className='mb-4 lg:md-0 lg:absolute lg:top-[32px] lg:left-[32px]'>
        <Link
          href='/'
          className={
            path === '/' ? 'font-extrabold text-yellow-500 ' : 'font-extrabold'
          }
        >
          .folio
        </Link>
      </h1>
      <nav className='flex-1'>
        <ul className='flex justify-center items-center gap-8'>
          <li>
            <Link href='/projects' className='font-medium'>
              <span
                className={
                  path.includes('projects')
                    ? 'font-semibold text-yellow-500'
                    : null
                }
              >
                projetos
              </span>
            </Link>
          </li>
          <li>
            <Link href='/about' className='font-medium'>
              <span
                className={
                  path.includes('about')
                    ? 'font-semibold text-yellow-500'
                    : null
                }
              >
                sobre mim
              </span>
            </Link>
          </li>
          <li>
            <Link href='/contact' className='font-medium'>
              <span
                className={
                  path.includes('contact')
                    ? 'font-semibold text-yellow-500'
                    : null
                }
              >
                contato
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className='absolute right-8 lg:top-[32px] lg:right-[32px] border-[1px] border-yellow-500 rounded-full flex justify-between items-center gap-2 h-[30px] px-2 cursor-pointer'
        onClick={handleDarkMode}
      >
        <BiSun size={20} className={`${darkMode ? '' : 'text-yellow-500'}`} />
        <BiMoon size={20} className={`${darkMode ? 'text-yellow-500' : ''}`} />
        {/* <BsCircleFill
          size={24}
          className={`absolute text-yellow-500 -z-10 top-[2px] ${
            darkMode ? 'right-0' : 'left-[6px]'
          }`}
        /> */}
      </div>
    </header>
  );
};

export default Header;
