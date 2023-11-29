import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './Login';

test('renders LoginForm correctly when estado is true', () => {
  const cambiarEstado = jest.fn();
  
  const { getByText, getByTestId } = render(
    <LoginForm estado={true} cambiarEstado={cambiarEstado}>
      <form data-testid="login-form">
        {/* Contenido del formulario */}
      </form>
    </LoginForm>
  );
  
  // Verificar que se rendericen correctamente los elementos del formulario y el botón de cerrar
  expect(getByTestId('login-form')).toBeInTheDocument();
  expect(getByText('X')).toBeInTheDocument();
});

test('does not render LoginForm when estado is false', () => {
  const cambiarEstado = jest.fn();
  
  const { queryByTestId, queryByText } = render(
    <LoginForm estado={false} cambiarEstado={cambiarEstado}>
      <form data-testid="login-form">
        {/* Contenido del formulario */}
      </form>
    </LoginForm>
  );
  
  // Verificar que no se renderice el formulario ni el botón de cerrar
  expect(queryByTestId('login-form')).toBeNull();
  expect(queryByText('X')).toBeNull();
});

test('calls cambiarEstado with false when "X" button is clicked', () => {
  const cambiarEstado = jest.fn();
  
  const { getByText } = render(
    <LoginForm estado={true} cambiarEstado={cambiarEstado}>
      <form data-testid="login-form">
        {/* Contenido del formulario */}
      </form>
    </LoginForm>
  );
  
  // Hacer clic en el botón de cerrar
  fireEvent.click(getByText('X'));
  
  // Verificar que la función cambiarEstado se haya llamado con false
  expect(cambiarEstado).toHaveBeenCalledWith(false);
});