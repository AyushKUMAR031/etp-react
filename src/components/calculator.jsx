import React, { useState } from 'react';

const BasicCalculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleOperation = (operation) => {
    const number1 = parseFloat(num1 || 0);
    const number2 = parseFloat(num2 || 0);

    let calcResult = 0;
    switch (operation) {
      case 'add':
        calcResult = number1 + number2;
        break;
      case 'subtract':
        calcResult = number1 - number2;
        break;
      case 'multiply':
        calcResult = number1 * number2;
        break;
      case 'divide':
        calcResult = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
        break;
      default:
        calcResult = 0;
    }
    setResult(calcResult);
  };

  return (
    <div>
      <h2>Basic Calculator</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <button onClick={() => handleOperation('add')}>Add</button>
      <button onClick={() => handleOperation('subtract')}>Subtract</button>
      <button onClick={() => handleOperation('multiply')}>Multiply</button>
      <button onClick={() => handleOperation('divide')}>Divide</button>
      <br />
      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
};

export default BasicCalculator;
