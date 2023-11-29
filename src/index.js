import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Componentes/Header/Header';
import Funcionalidades from './Componentes/Funcionalidades/Funcionalidades';
import Oferta from './Componentes/Oferta/Oferta';





import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Funcionalidades />
    <Oferta />
  </React.StrictMode>
);

reportWebVitals();
