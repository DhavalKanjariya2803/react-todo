import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="flex items-center justify-between mb-2 m-4 cursor-pointer">
      <span
        onClick={() => toggleComplete(todo.id)}
        className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 text-white px-2 py-1 ml-4"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
