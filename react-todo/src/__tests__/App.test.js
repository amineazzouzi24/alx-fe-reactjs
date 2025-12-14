// src/__tests__/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App Component', () => {
  test('renders App component with TodoList', () => {
    render(<App />);

    // Use getAllByRole because the page may contain multiple headings with the same text
    const headings = screen.getAllByRole('heading', { name: /todo list/i });
    expect(headings.length).toBeGreaterThan(0);

    // Check initial todos
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });
});
