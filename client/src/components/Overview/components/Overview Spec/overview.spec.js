import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'


it('should render Q&A widget', () => {
  render(<SearchBar searchTerm='hello' />);
  const inputElement = screen.getByText(/hello/i);
  expect(inputElement).toBeInTheDocument();
})