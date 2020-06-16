import React from 'react';
import Footer from '../components/Footer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter: new Adapter()});

import { render } from 'enzyme';



describe('footer renders as expected', () => {
  it('creates a footer element', () => {
      let component = render(<Footer />);
      expect(component.find('footer')).toBeDefined();
  });
});