import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('laevix-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Default to dark mode if no saved preference
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('laevix-theme', newIsDark ? 'dark' : 'light');
  };

  return { isDark, toggleTheme };
}
