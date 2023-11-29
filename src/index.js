import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Componentes/Header/Header';
import Funcionalidades from './Componentes/Funcionalidades/Funcionalidades';
import Oferta from './Componentes/Oferta/Oferta';
import QuienesSomos from './Componentes/Quienes Somos/Quienes-Somos';
import Servicios from './Componentes/Servicios/Servicios';
import Footer from './Componentes/Footer/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Funcionalidades />
    <Oferta />
    <QuienesSomos />
    <Servicios />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
