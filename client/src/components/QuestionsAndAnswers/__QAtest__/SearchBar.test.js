import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'
import SearchBar from '../components/SearchBar.jsx';

// npm run test -- -t 'utils'
// npm run test --P 'filename'

describe ('SearchBar component is working as expected', () => {

    it('should render search bar component on page',  () => {
      render(<SearchBar/>);
      expect(screen.getByRole('textbox')).toBeInTheDocument()

    });

    it('should have an search icon inside of search bar',  () => {
      render(<SearchBar/>);
      expect(screen.getByTestId('searchIcon')).toBeInTheDocument()
    });

    it('should show the search term inside of the search bar',  () => {
      render(<SearchBar searchTerm={'hello world'}/>)
      expect(screen.getByDisplayValue('hello world')).toBeInTheDocument();
    });

    it('should show search term when typing',  () => {
      render(<SearchBar searchTerm={'Good'}/>)
      const inputElement = screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...');
      expect(inputElement.value).toBe('Good');
    });


})