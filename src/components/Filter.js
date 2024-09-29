import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 ${filter === 'all' ? 'bg-blue-500 text-white' : ''}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`px-4 py-2 ${filter === 'completed' ? 'bg-blue-500 text-white' : ''}`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter('pending')}
        className={`px-4 py-2 ${filter === 'pending' ? 'bg-blue-500 text-white' : ''}`}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;
