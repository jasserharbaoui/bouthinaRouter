

// Filter.js
import React from 'react';

function Filter({ setFilter }) {
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Filter by title"
      onChange={handleFilterChange}
    />
  );
}

export default Filter;
