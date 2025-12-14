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

  // هاد الـ test ما يقدرش يمشي إلا إذا كان AddTodoForm يحتوي على placeholder و form صحيح
  // إذا ما عندكش AddTodoForm جاهز، خليه معلّق مؤقتاً أو احذفو
  test('adds a new todo', () => {
    render(<TodoList />);

    // افترض إنو AddTodoForm عندو input بالـ placeholder هذا (أو غيري حسب الكود ديالك)
    const input = screen.getByPlaceholderText(/add new todo/i); // أو /أضف مهمة/i إذا بالعربية
    const addButton = screen.getByRole('button', { name: /add/i }); // أو getByText('Add')

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton); // أو fireEvent.submit(screen.getByRole('form'))

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');

    // قبل الكليك: ما عندوش line-through
    expect(todoItem).toHaveStyle('text-decoration: none');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByRole('button', { name: 'Delete' });
    
    fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getByText('Write Todo App')).toBeInTheDocument();
  });
});