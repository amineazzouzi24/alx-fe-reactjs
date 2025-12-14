import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('adds a todo item', () => {
  render(<TodoList />);
  const input = screen.getByRole('textbox');
  const button = screen.getByText(/Add Todo/i);

  fireEvent.change(input, { target: { value: 'Learn React' } });
  fireEvent.click(button);

  expect(screen.getByText('Learn React')).toBeInTheDocument();
});
