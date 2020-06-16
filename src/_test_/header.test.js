
import React from 'react';
import Header from '../components/Header';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter: new Adapter()});

import { render } from 'enzyme';

describe('header renders as expected', () => {
    it('creates a header element', () => {
        let component = render(<Header />);
        expect(component.find('header')).toBeDefined();
        expect(component.find('header h1')).toBeDefined();
    });
});
