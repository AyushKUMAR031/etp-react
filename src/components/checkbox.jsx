import React, { useState } from 'react';

const DynamicChecklist = () => {
  const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Mango', 'Orange'];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option) 
        : [...prevSelected, option] 
    );
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Checklist</h2>
      <ul >
        {options.map((option, index) => (
          <li key={index} >
            <label>
              <input
                type="checkbox"
                value={option}
                onChange={() => handleCheckboxChange(option)}

              />
              {option}
            </label>
          </li>
        ))}
      </ul>

      <h3>Selected Options:</h3>
      {selectedOptions.length > 0 ? (
        <ul >
          {selectedOptions.map((item, index) => (
            <li
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p>No options selected</p>
      )}
    </div>
  );
};

export default DynamicChecklist;
