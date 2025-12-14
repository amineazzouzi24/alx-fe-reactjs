import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    addTodo(newTodo.trim());
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Add todo form">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;