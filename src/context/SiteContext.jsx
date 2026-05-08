import { createContext, useState, useEffect } from 'react';

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'tr' : 'en'));
  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <SiteContext.Provider value={{ lang, isDarkMode, toggleLang, toggleTheme }}>
      {children}
    </SiteContext.Provider>
  );
};