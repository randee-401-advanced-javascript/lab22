import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app.js';

describe('Snapshot test for App', () => {
  it(' matches the snapshot', () => {
    const currentHtml = renderer.create(<App />).toJSON();
    expect(currentHtml).toMatchSnapshot();
  })
})