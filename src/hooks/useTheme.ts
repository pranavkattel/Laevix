import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Default to dark mode
    const savedTheme = localStorage.getItem('laevix-theme');
    const prefersDark = savedTheme === 'dark' || (!savedTheme);
    setIsDark(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('laevix-theme', newIsDark ? 'dark' : 'light');
  };

  return { isDark, toggleTheme };
}
