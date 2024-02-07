import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { test, expect } from 'vitest';

test('renders home page link', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();
});

test('renders shop page link', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
//   const shopLink = screen.getByText(/Shop/i);
    const shopLinks = screen.getAllByRole('link', { name: /Shop/i });

    const shopLink = shopLinks[0]

  expect(shopLink).toBeInTheDocument();
});
