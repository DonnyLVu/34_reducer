import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {

  it('changes the input color and handles the record action', () => {
    render(<App />);
    const colorInput = screen.getByTestId('COLOR_CHANGE');
    fireEvent.change(colorInput, {
      target: {
        value: '#1100ff'
      }
    });
    expect(colorInput.value).toEqual('#1100ff');
  });

  // eslint-disable-next-line max-len
  it('changes the input color to the previous color and handles the undo action', () => {
    render(<App />);
    const colorInput = screen.getByTestId('COLOR_CHANGE');
    fireEvent.change(colorInput, {
      target: {
        value: '#3700ff'
      }
    });
    expect(colorInput.value).toEqual('#3700ff');
  });

  // eslint-disable-next-line max-len
  it('changes the input color to the next color and handles the redo action', () => {
    render(<App />);
    const colorInput = screen.getByTestId('COLOR_CHANGE');
    fireEvent.change(colorInput, {
      target: {
        value: '#ff00c8'
      }
    });
    expect(colorInput.value).toEqual('#ff00c8');
  });
});
