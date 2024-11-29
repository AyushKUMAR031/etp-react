import { useState } from "react";

const DisableButtonExample = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <h2>Disable Button Example</h2>
      <input
        type="text"
        placeholder="Type something to enable the button"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <button disabled={!inputValue.trim()}>Submit</button>
    </div>
  );
};

export default DisableButtonExample;
