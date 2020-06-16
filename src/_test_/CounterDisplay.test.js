import React from 'react';
import Counter from '../components/Counter.js';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter: new Adapter()});


import { shallow } from 'enzyme';


describe('Does the counter even work', () => {
  it('has the correct initial state values', () => {

    let component = shallow(<Counter />); 
    component.find('span.up.clicker').simulate('click', {});


    expect(component.state('count')).toBe(1);
    expect(component.state('polarity')).toBe('positive');
  });



  it('works between positive and negative', () => {
    let component = shallow(<Counter />);

    component.find('span.down.clicker'). simulate('click', {});

    expect(component.state('count')).toBe(-1);
    expect(component.state('polarity')).toBe('negative')

    component.find('span.up.clicker').simulate('click', {});

    expect(component.state('count')).toBe(0);
    expect(component.state('polarity')).toBe('');

    component = shallow(<Counter />);

    component.find('span.up.clicker'). simulate('click', {});

    expect(component.state('count')).toBe(1);
    expect(component.state('polarity')).toBe('positive')
  });

  it('handles the bot clicking', () => {
    let component = shallow(<Counter />);

    for(let i = 0; i < 100; i++) component.find('span.up.clicker').simulate('click', {});

    expect(component.state('count')).toBe(100);
    expect(component.state('polarity')).toBe('positive');
  })
})