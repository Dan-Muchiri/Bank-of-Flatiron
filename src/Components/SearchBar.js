
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearchChange(e) {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  }

  return (
    <input
      type="text"
      placeholder="Search transactions"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
}

export default SearchBar;
