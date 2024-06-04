import React from 'react';
import { render } from '@testing-library/react';
import Sports from '../pages/Sports';

test('renders Sports component without crashing', () => {
  render(<Sports />);
});