import React, { useEffect } from 'react';
import './App.css';
import Main from '../src/component/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 90,
      duration: 650,
      once: true,
    });
  }, []);

  return (
    <Main />
  );
}

export default App;
