import React from 'react';
import { render } from '@testing-library/react';
import QuienesSomos from '../Quienes Somos';

describe('QuienesSomos', () => {
  test('renders heading text', () => {
    const { getByText } = render(<QuienesSomos />);
    const headingText = getByText('¿Quienes Somos?');
    expect(headingText).toBeInTheDocument();
  });

  test('renders paragraph text', () => {
    const { getByText } = render(<QuienesSomos />);
    const paragraphText = getByText('Somos personas amantes a los animales que garantizamos el cuidado integral de tus mascotas como si fueran nuestros hijos');
    expect(paragraphText).toBeInTheDocument();
  });

  test('renders contact heading', () => {
    const { getByText } = render(<QuienesSomos />);
    const contactHeading = getByText('Contactenos...');
    expect(contactHeading).toBeInTheDocument();
  });
});