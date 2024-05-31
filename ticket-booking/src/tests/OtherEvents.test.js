import React from 'react';
import { render, screen } from '@testing-library/react';
import OtherEvents from '../components/OtherEvents';

test('renders Other Events', async () => {
  render(<OtherEvents />);

  expect(screen.getByText('Other Events')).toBeInTheDocument();
});
