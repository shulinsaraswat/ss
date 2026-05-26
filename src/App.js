import React, { useEffect, useState } from 'react';
import './App.css';
import Main from '../src/component/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'dark';
    }

    return window.localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    AOS.init({
      offset: 90,
      duration: 650,
      once: true,
    });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Main theme={theme} onToggleTheme={toggleTheme} />
  );
}

export default App;
