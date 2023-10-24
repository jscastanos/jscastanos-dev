'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='h-16 flex justify-center items-center'>
      <div className='text-lg'>
        <span>Contact me at</span>
        &nbsp;
        <Link
          href='#'
          onClick={(e) => {
            window.location.href = 'mailto:jec.castanos@gmail.com';
            e.preventDefault();
          }}>
          jec.castanos@gmail.com
        </Link>
      </div>
    </footer>
  );
}
