import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders main heading and TodoList component', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /My Todo App/i })).toBeInTheDocument();
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Write Todo App')).toBeInTheDocument();
});
