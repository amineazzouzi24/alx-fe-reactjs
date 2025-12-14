// src/App.test.js
import React from 'react'; // ✅ only once
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders main heading and TodoList component', () => {
  // Render the App component
  render(<App />);

  // Check that the main heading is displayed
  expect(screen.getByRole('heading', { name: /My Todo App/i })).toBeInTheDocument();

  // Check that the initial TodoList items are displayed
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Write Todo App')).toBeInTheDocument();
});
