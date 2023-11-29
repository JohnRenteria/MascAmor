import React from 'react';
import { shallow } from 'enzyme';
import RedesSociales from './RedesSociales';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() })

describe('RedesSociales', () => {
  it('debería renderizar correctamente', () => {
    const wrapper = shallow(<RedesSociales />);
    expect(wrapper).toMatchSnapshot();
  });

  it('debería contener el atributo id "redes-sociales"', () => {
    const wrapper = shallow(<RedesSociales />);
    expect(wrapper.find('#redes-sociales').exists()).toBe(true);
  });

  it('debería renderizar cuatro imágenes de redes sociales', () => {
    const wrapper = shallow(<RedesSociales />);
    expect(wrapper.find('.Logo-Redes-Sociales img')).toHaveLength(4);
  });
});
