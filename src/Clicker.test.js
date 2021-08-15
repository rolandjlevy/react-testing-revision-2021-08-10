import React from 'react';
import '@testing-library/jest-dom';
import {
  render,
  screen,
  waitFor,
  logRoles
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import Clicker from './Clicker';

describe('Should track amount of clicks', () => {
  test('Toggle visibility of content based on number of clicks', () => {
    render(<Clicker />);
    screen.queryByRole('heading', { name: 'Counter: 0' });
    const subtractButton = screen.queryByRole('button', { name: 'Subtract' });
    const addButton = screen.queryByRole('button', { name: 'Add' });
    
    userEvent.click(subtractButton);
    screen.queryByRole('heading', { name: 'Counter: -1' });
    
    userEvent.click(addButton);
    screen.queryByRole('heading', { name: 'Counter: 0' });
    
  });
});