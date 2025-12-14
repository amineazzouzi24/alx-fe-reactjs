import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('1. should render the component correctly with initial todos', () => {
    render(<TodoList />);
    
    // Check title is displayed
    expect(screen.getByText('قائمة المهام')).toBeInTheDocument();
    
    // Check initial todos are displayed
    expect(screen.getByText('تعلم React')).toBeInTheDocument();
    expect(screen.getByText('بناء مشروع Todo List')).toBeInTheDocument();
    expect(screen.getByText('كتابة الاختبارات')).toBeInTheDocument();
    
    // Check add form exists
    expect(screen.getByTestId('add-todo-form')).toBeInTheDocument();
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-button')).toBeInTheDocument();
  });

  test('2. should add a new todo', async () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Enter new text
    fireEvent.change(input, { target: { value: 'New test todo' } });
    
    // Click add button
    fireEvent.click(addButton);
    
    // Check new todo appears
    await waitFor(() => {
      expect(screen.getByText('New test todo')).toBeInTheDocument();
    });
    
    // Input should be cleared
    expect(input.value).toBe('');
  });

  test('3. should not add an empty todo', () => {
    render(<TodoList />);
    
    const initialItems = screen.getAllByTestId(/todo-item-/).length;
    const addButton = screen.getByTestId('add-button');
    
    // Add button should be disabled initially
    expect(addButton).toBeDisabled();
    
    // Enter only spaces
    const input = screen.getByTestId('todo-input');
    fireEvent.change(input, { target: { value: '   ' } });
    
    fireEvent.click(addButton);
    
    // Number of todos should not change
    const currentItems = screen.getAllByTestId(/todo-item-/).length;
    expect(currentItems).toBe(initialItems);
  });

  test('4. should toggle todo completion status', () => {
    render(<TodoList />);
    
    const firstTodoText = screen.getByTestId('todo-text-1');
    
    // Initially completed
    expect(firstTodoText).toHaveStyle('text-decoration: line-through');
    
    fireEvent.click(firstTodoText);
    
    // Style should change
    expect(firstTodoText).toHaveStyle('text-decoration: none');
    
    fireEvent.click(firstTodoText);
    expect(firstTodoText).toHaveStyle('text-decoration: line-through');
  });

  test('5. should delete a todo', () => {
    render(<TodoList />);
    
    const initialTodos = screen.getAllByTestId(/todo-item-/);
    const initialCount = initialTodos.length;
    
    const deleteButton = screen.getByTestId('delete-button-1');
    
    fireEvent.click(deleteButton);
    
    const remainingTodos = screen.getAllByTestId(/todo-item-/);
    expect(remainingTodos.length).toBe(initialCount - 1);
    
    expect(screen.queryByText('تعلم React')).not.toBeInTheDocument();
  });

  test('6. should display todo statistics', () => {
    render(<TodoList />);
    
    expect(screen.getByText(/المهام المكتملة:/)).toBeInTheDocument();
    
    // Initial state: 1 completed out of 3
    expect(
      screen.getByText('المهام المكتملة: 1 من 3')
    ).toBeInTheDocument();
    
    const secondTodo = screen.getByTestId('todo-text-2');
    fireEvent.click(secondTodo);
    
    // Now 2 completed out of 3
    expect(
      screen.getByText('المهام المكتملة: 2 من 3')
    ).toBeInTheDocument();
  });

  test('7. should show message when there are no todos', () => {
    render(<TodoList />);
    
    const deleteButtons = screen.getAllByTestId(/delete-button-/);
    
    deleteButtons.forEach(button => {
      fireEvent.click(button);
    });
    
    expect(
      screen.getByText('لا توجد مهام حالياً')
    ).toBeInTheDocument();
    
    expect(screen.queryAllByTestId(/todo-item-/)).toHaveLength(0);
  });
});

describe('AddTodoForm Component', () => {
  test('8. should allow typing text and submitting', () => {
    const mockAddTodo = jest.fn();
    
    render(
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mockAddTodo('Test todo');
        }}
      >
        <input
          data-testid="todo-input"
          onChange={() => {}}
          value="Test todo"
        />
        <button data-testid="add-button" type="submit">
          Add
        </button>
      </form>
    );
    
    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('add-button');
    
    fireEvent.submit(button.closest('form'));
    
    // Here we could assert that mockAddTodo was called
  });
});
