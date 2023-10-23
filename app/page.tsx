'use client';
import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from './components/AppLayout';

export default function Home() {
  const context = useContext(ThemeContext);

  if (context === null) return null;

  const { theme } = context;

  return (
    <div className='flex justify-center items-center flex-1 flex-col sm:flex-row space-y-4 sm:space-x-4'>
      <div>
        {theme === 'dark' && (
          <Image
            className='rounded-full'
            src='/night-owl.svg'
            alt='owl'
            width={200}
            height={200}
          />
        )}
        {theme === 'light' && (
          <Image
            className='rounded-full'
            src='/day-owl.svg'
            alt='owl'
            width={200}
            height={200}
          />
        )}
      </div>
      <div className='space-y-2'>
        <p className='text-base sm:text-xl md:text-2xl xl:text-3xl'>Hello,</p>
        <h1 className='text-4xl sm:text-6xl md:text-7xl xl:text-8xl'>
          I’m <span className='font-semibold '>Jec Castanos</span>
        </h1>
        <p className='text-lg sm:text-2xl md:text-3xl xl:text-4xl'>
          Frontend Developer
        </p>
      </div>
    </div>
  );
}
