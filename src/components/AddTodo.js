import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full"
        placeholder="Add a new task"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
