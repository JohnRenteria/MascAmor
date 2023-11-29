import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import Header from './Header';

test('renders header correctly', () => {
  const { getByText, getByAltText } = render(<Header />);
  
  // Verificar que se rendericen correctamente los elementos del encabezado
  expect(getByText('MascAmor')).toBeInTheDocument();
  expect(getByText('Tu Mascota, Tu Hogar')).toBeInTheDocument();
  expect(getByAltText('Logo')).toBeInTheDocument();
});

test('opens login form when "Iniciar Sesión" is clicked', () => {
 render(<Header />);

 const elemento = screen.getByTestId('login-form');
  
  // Verificar que el formulario de inicio de sesión no esté visible inicialmente
  expect(elemento).toBeInTheDocument();
  
  // Hacer clic en "Iniciar Sesión"
  fireEvent.click(getByText('Iniciar Sesión'));
  
  // Verificar que el formulario de inicio de sesión esté visible después del clic
  expect(getByTestId('login-form')).toBeVisible();
});

test('closes login form when "Registrarse" button is clicked', () => {
  const { getByText, getByAltText, getByTestId } = render(<Header />);
  
  // Hacer clic en "Iniciar Sesión" para abrir el formulario de inicio de sesión
  fireEvent.click(getByText('Iniciar Sesión'));
  
  // Verificar que el formulario de inicio de sesión esté visible antes del clic
  expect(getByTestId('login-form')).not.toBeVisible();
  
  // Hacer clic en "Registrarse" dentro del formulario de inicio de sesión
  fireEvent.click(getByText('Registrarse'));
  
  // Verificar que el formulario de inicio de sesión se cierre después del clic
  expect(getByTestId('login-form')).not.toBeVisible();
});
