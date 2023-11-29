import React from 'react';
import { shallow } from 'enzyme';
import RedesSociales from '../Redes Sociales';

describe('RedesSociales', () => {
  test('renders heading text', () => {
    const wrapper = shallow(<RedesSociales />);
    const headingText = wrapper.find('h2').text();
    expect(headingText).toEqual('Redes Sociales');
  });

  test('renders Facebook image', () => {
    const wrapper = shallow(<RedesSociales />);
    const facebookImage = wrapper.find('img[alt="Facebook"]');
    expect(facebookImage.exists()).toBe(true);
  });

  test('renders Instagram image', () => {
    const wrapper = shallow(<RedesSociales />);
    const instagramImage = wrapper.find('img[alt="Instagram"]');
    expect(instagramImage.exists()).toBe(true);
  });

  test('renders Twitter image', () => {
    const wrapper = shallow(<RedesSociales />);
    const twitterImage = wrapper.find('img[alt="Twitter"]');
    expect(twitterImage.exists()).toBe(true);
  });

  test('renders Whatsapp image', () => {
    const wrapper = shallow(<RedesSociales />);
    const whatsappImage = wrapper.find('img[alt="Whatsapp"]');
    expect(whatsappImage.exists()).toBe(true);
  });
});