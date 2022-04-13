import { render, screen, fireEvent } from '@testing-library/react';
import ImageGallery from '../ImageGallery.jsx'
import React from 'react';
import '@testing-library/jest-dom'


it('should render Image Gallery', () => {
  render(<ImageGallery />);
  const inputElement = screen.
  expect(inputElement).toBeInTheDocument();
})