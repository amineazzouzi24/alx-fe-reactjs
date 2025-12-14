import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text); // ✅ FIXED (was onAdd)
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
