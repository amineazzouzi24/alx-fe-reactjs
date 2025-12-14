// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);

    // Get input and button
    const input = screen.getByPlaceholderText('Add new todo');
    const addButton = screen.getByText('Add');

    // Simulate user typing and adding a new todo
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    // Assert that new todo appears in the list
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');

    // Initially not completed
    expect(todo).toHaveStyle('text-decoration: none');

    // Toggle completion
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');

    // Toggle back to incomplete
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText('Delete');

    // Delete first todo
    fireEvent.click(deleteButtons[0]);

    // The deleted todo should no longer exist
    expect(screen.queryByText('Learn React')).toBeNull();

    // The second todo should still exist
    expect(screen.getByText('Write Todo App')).toBeInTheDocument();
  });
});
