import React, { useState } from 'react';

const SearchFilter = () => {
  const [query, setQuery] = useState('');
  const data = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Grape',
    'Mango',
    'Orange',
    'Pineapple',
  ];

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
