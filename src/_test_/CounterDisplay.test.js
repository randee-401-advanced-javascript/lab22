import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Counter from '../components/Counter.js';

describe('Does the counter even work', () => {
  it('has the correct initial state values', () => {
    let component = shallow(<Counter />); 
    expect(component.state('count')).ToBe(0)
  })
})