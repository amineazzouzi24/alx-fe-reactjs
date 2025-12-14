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
    const input = screen.getByPlaceholderText('Add new todo');
    const form = screen.getByRole('form', { name: /Add todo form/i });

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(form);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    
    expect(todo).toHaveStyle('text-decoration: none');

    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText('Delete');
    
    fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getByText('Write Todo App')).toBeInTheDocument();
  });
});