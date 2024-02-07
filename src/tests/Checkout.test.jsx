import { render, screen, fireEvent } from '@testing-library/react';
import Checkout from '../components/Checkout';
import { test, expect, vi } from 'vitest';

test('renders order summary correctly', () => {
  const cartItems = [{ id: 1, title: 'Test Product', price: 10, quantity: 2 }];
  render(<Checkout cartItems={cartItems} setCartItems={() => {}} />);
  
  const orderSummary = screen.getByText(/Order Summary/i);
  expect(orderSummary).toBeInTheDocument();
});

test('handles place order click', () => {
  const setCartItemsMock = vi.fn();
  const cartItems = [{ id: 1, title: 'Test Product', price: 10, quantity: 2 }];
  render(<Checkout cartItems={cartItems} setCartItems={setCartItemsMock} />);
  
  window.alert = vi.fn();
  const placeOrderButton = screen.getByText(/Place Order/i);
  fireEvent.click(placeOrderButton);
  
  expect(setCartItemsMock).toHaveBeenCalledTimes(1);
});

