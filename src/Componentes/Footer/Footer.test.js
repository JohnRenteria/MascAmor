import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import React,{ReactDOM} from 'react';

test('renders contact information in the footer', () => {
  const { getByText } = render(<Footer />);
  
  // Verificar que se renderice el texto de contacto
  expect(getByText('Contactenos al:')).toBeInTheDocument();
  expect(getByText('Dirección: Calle 30 Avenida Aeropuerto')).toBeInTheDocument();
  expect(getByText('Ciudad: Quibdó, Chocó')).toBeInTheDocument();
  expect(getByText('Correo Electronico: MascAmorQuibdo@gmail.com')).toBeInTheDocument();
  expect(getByText('Telefono: 352 515 54 52 - (604) 624 15 45')).toBeInTheDocument();
});

test('renders social media component in the footer', () => {
  render(<Footer />);
  const elemento = screen.getByTestId('redes-sociales');
  
  // Verificar que se renderice el componente RedesSociales
  expect(elemento).toBeInTheDocument();  
});
