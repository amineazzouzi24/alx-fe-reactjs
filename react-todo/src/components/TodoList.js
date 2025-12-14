import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
  // Initial static array of todos
  const initialTodos = [
    { id: 1, text: 'تعلم React', completed: true },
    { id: 2, text: 'بناء مشروع Todo List', completed: false },
    { id: 3, text: 'كتابة الاختبارات', completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [nextId, setNextId] = useState(4);

  const addTodo = (text) => {
    if (text.trim() === '') return;
    
    const newTodo = {
      id: nextId,
      text: text.trim(),
      completed: false,
    };
    
    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list" data-testid="todo-list">
      <h1>قائمة المهام</h1>
      <AddTodoForm onAdd={addTodo} />
      
      {todos.length === 0 ? (
        <p className="no-todos">لا توجد مهام حالياً</p>
      ) : (
        <ul className="todos">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      )}
      
      <div className="stats">
        <p>
          المهام المكتملة: {todos.filter(todo => todo.completed).length} من {todos.length}
        </p>
      </div>
    </div>
  );
};

export default TodoList;