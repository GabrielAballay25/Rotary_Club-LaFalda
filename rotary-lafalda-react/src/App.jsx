import React from 'react';

// Importa todos los componentes que creaste desde la carpeta 'components'
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Calendar } from './components/Calendar';
import { OrthopedicBank } from './components/OrthopedicBank';
import { LiteraryContests } from './components/LiteraryContests';
import { YouthExchange } from './components/YouthExchange';
import { Footer } from './components/Footer';

// Importa el archivo CSS (es una buena práctica, aunque esté vacío)
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Calendar />
        <OrthopedicBank />
        <LiteraryContests />
        <YouthExchange />
      </main>
      <Footer />
    </>
  );
}

export default App;