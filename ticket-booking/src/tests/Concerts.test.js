import React from 'react';
import { render, screen } from '@testing-library/react';
import Concerts from '../components/Concerts';

test('renders Concerts', async () => {
  render(<Concerts />);

  expect(screen.getByText('Concerts')).toBeInTheDocument();
});
