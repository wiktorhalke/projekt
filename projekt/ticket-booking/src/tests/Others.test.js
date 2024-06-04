import React from 'react';
import { render } from '@testing-library/react';
import Others from '../pages/Others';

test('renders Others component without crashing', () => {
  render(<Others />);
});