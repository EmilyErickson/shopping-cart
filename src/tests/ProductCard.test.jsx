import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '../components/ProductCard';
import { test, expect, vi } from 'vitest';



test('renders product card correctly', () => {
  const item = { id: 1, title: 'Test Product', price: 10, quantity: 1 };
  render(<ProductCard item={item} addToCart={() => {}} cartItems={[]} removeFromCart={() => {}} />);
  
  const productTitle = screen.getByText(/Test Product/i);
  expect(productTitle).toBeInTheDocument();
});

test('handles add to cart click', () => {
  const addToCartMock = vi.fn();
  const item = { id: 1, title: 'Test Product', price: 10, quantity: 1 };
  render(<ProductCard item={item} addToCart={addToCartMock} cartItems={[]} removeFromCart={() => {}} />);
  
  const addToCartButton = screen.getByText(/Add To Cart/i);
  fireEvent.click(addToCartButton);
  
  expect(addToCartMock).toHaveBeenCalledTimes(1);
});

