import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { test, expect } from 'vitest';



test('renders Navbar with cart count', () => {
    const cartItems = [
      { id: 1, name: 'Product 1', quantity: 2 },
      { id: 2, name: 'Product 2', quantity: 1 },
    ];

    render(
      <Router>
        <Navbar cartItems={cartItems} />
      </Router>
    );

    const cartCountElement = screen.getByText('3'); 
    expect(cartCountElement).toBeInTheDocument();
  });

  test('renders Navbar without cart count', () => {
    const cartItems = [];

    render(
      <Router>
        <Navbar cartItems={cartItems} />
      </Router>
    );

    const cartCountElement = screen.queryByTestId('cart-count');
    expect(cartCountElement).not.toBeInTheDocument();
  });