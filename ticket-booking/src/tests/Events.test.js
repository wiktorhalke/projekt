import React from 'react';
import { render, screen } from '@testing-library/react';
import Events from '../components/Events';

test('renders Sports Events', async () => {
  render(<Events category="sports" />);

  expect(screen.getByText('Sports Events')).toBeInTheDocument();
});

test('renders Concerts Events', async () => {
  render(<Events category="concerts" />);

  expect(screen.getByText('Concerts Events')).toBeInTheDocument();
});

test('renders Other Events', async () => {
  render(<Events category="others" />);

  expect(screen.getByText('Other Events')).toBeInTheDocument();
});
