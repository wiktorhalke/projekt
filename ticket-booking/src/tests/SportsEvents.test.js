import React from 'react';
import { render, screen } from '@testing-library/react';
import SportsEvents from '../components/SportsEvents';

test('renders Sports Events', async () => {
  render(<SportsEvents />);

  expect(screen.getByText('Sports Events')).toBeInTheDocument();
});
