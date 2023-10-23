'use client';

import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export default function DarkMode({ theme, setTheme }: Props) {
  function handleMode() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    // set mode to local storage
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button className='text-2xl' onClick={handleMode}>
      {theme === 'dark' && <FontAwesomeIcon icon={faMoon} />}
      {theme === 'light' && <FontAwesomeIcon icon={faSun} />}
    </button>
  );
}
