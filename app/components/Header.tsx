'use client';

import { useContext } from 'react';
import { ThemeContext } from './AppLayout';
import DarkMode from './DarkMode';

export default function Header() {
  const context = useContext(ThemeContext);

  if (context === null) return null;

  const { theme, toggleTheme } = context;

  return (
    <header className='h-16 flex justify-end'>
      <DarkMode theme={theme} setTheme={toggleTheme} />
    </header>
  );
}
