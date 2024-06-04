import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/Home';

test('renders Home component without crashing', () => {
  render(<Home />);
});