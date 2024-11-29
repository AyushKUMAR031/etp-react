import React, { useState } from 'react';

const AddTwoNumbers = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const sum = parseFloat(num1 || 0) + parseFloat(num2 || 0);
    setResult(sum);
  };

  return (
    <div>
      <h2>Add Two Numbers</h2>
      <div>
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <button onClick={handleAddition}>Add</button>
      {result !== null && (
        <div>
          <strong>Result: {result}</strong>
        </div>
      )}
    </div>
  );
};

export default AddTwoNumbers;
