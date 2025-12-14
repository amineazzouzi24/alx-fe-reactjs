import React from 'react';
import TodoList from './components/TodoList'; // أو TodoList.jsx

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1> {/* أو أي title */}
      <TodoList />
    </div>
  );
}

export default App;