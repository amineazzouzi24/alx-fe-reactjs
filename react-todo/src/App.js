import React, { useState } from 'react';
import React from 'react';
import TodoList from './components/TodoList'; // ✅ correct

function App() {
  return (
    <div className="App">
      <h1>My React Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
