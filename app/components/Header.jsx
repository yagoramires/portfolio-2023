'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

const Header = () => {
  const path = usePathname();

  return (
    <header className='w-full flex items-center justify-center p-8'>
      <h1>
        <Link href='/' className='font-extrabold'>
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
                projects
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
                about me
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
                contact
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
