import React from 'react';
import { render } from '@testing-library/react';
import Funcionalidades from './Funcionalidades';

test('renders functionality links correctly', () => {
  const { getByText } = render(<Funcionalidades />);
  
  // Verificar que se rendericen correctamente los enlaces de funcionalidad
  expect(getByText('VETERINARIA')).toBeInTheDocument();
  expect(getByText('PELUQUERIA')).toBeInTheDocument();
  expect(getByText('ADOPCIÓN')).toBeInTheDocument();
  expect(getByText('TIENDA ONLINE')).toBeInTheDocument();
});