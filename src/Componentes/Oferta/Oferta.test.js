import React from 'react';
import { render } from '@testing-library/react';
import Oferta from './Oferta';

describe('Oferta', () => {
  test('renders promotion text', () => {
    const { getByText } = render(<Oferta />);
    const promotionText = getByText('Gran Promoción Navideña');
    expect(promotionText).toBeInTheDocument();
  });

  test('renders offer image', () => {
    const { getByAltText } = render(<Oferta />);
    const offerImage = getByAltText('Oferta');
    expect(offerImage).toBeInTheDocument();
  });
});