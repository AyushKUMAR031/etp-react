import { useState } from "react";

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(null);
//   const [history, setHistory] = useState([]);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
    setRandomNumber(number);
    // setHistory((prevHistory) => [...prevHistory, number]);
  };

  return (
    <div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber !== null && <p>Random Number: {randomNumber}</p>}
      {/* <h3>Generated Numbers History:</h3> */}
      {/* <ul>
        {history.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default RandomNumberGenerator;
