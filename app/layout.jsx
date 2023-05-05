'use client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import { Poppins } from 'next/font/google';
import Header from './components/Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <body className={`${poppins.className} dark:bg-zinc-900 `}>
        <Header />
        <main className='w-full flex flex-col items-center justify-center p-4 lg:p-8 lg:min-h-[calc(100vh-88px)] min-h-[calc(100vh-128px)] max-w-[1280px] mx-auto dark:text-white'>
          {children}
        </main>
        <ToastContainer
          autoClose={3000}
          position={toast.POSITION.BOTTOM_RIGHT}
        />
      </body>
    </html>
  );
}
