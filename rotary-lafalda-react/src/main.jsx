// Este archivo es el punto de entrada de tu aplicación.
// Le dice a React dónde renderizar el componente principal (App).

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Asegúrate de importar el componente App
import './index.css';     // Importa los estilos de Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);