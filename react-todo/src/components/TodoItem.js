import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`} data-testid={`todo-item-${todo.id}`}>
      <span 
        className="todo-text" 
        onClick={() => onToggle(todo.id)}
        data-testid={`todo-text-${todo.id}`}
        style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#888' : '#000',
          cursor: 'pointer'
        }}
      >
        {todo.text}
      </span>
      <button 
        onClick={() => onDelete(todo.id)}
        className="delete-button"
        data-testid={`delete-button-${todo.id}`}
      >
        حذف
      </button>
    </li>
  );
};

export default TodoItem;