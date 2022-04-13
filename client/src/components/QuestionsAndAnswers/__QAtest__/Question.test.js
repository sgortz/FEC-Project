import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Question from '../components/Question.jsx';
import QAMockData from '../__QAtest__/QAMockData.js';




describe('Individual question is rendered as expected', () => {


  it('should render question on page', () => {
    render(<Question question={QAMockData.questions.results[0]}/>);
    expect(screen.getByText('Helpful?')).toBeInTheDocument()
  });

  it('should have add answer option on page', () => {
    render(<Question question={QAMockData.questions.results[0]}/>);
    expect(screen.getByText('Add Answer')).toBeInTheDocument()
  });

  it('should increase the helpful count after click' , () => {
    render(<Question question={QAMockData.questions.results[0]}/>);
    const linkElement = screen.getByTestId('helpfulLink');
    fireEvent.click(linkElement);
    expect(linkElement).toBeInTheDocument('Yes (5)')
  });

})