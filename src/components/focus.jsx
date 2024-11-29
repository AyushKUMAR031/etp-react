import React, { useRef } from 'react';

const FocusOnInputSubmit = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents form submission
    if (inputRef.current) {
      inputRef.current.focus(); // Focus on the input field
    }
  };

  return (
    <div>
      <h2>Focus on Input After Submit</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder="Enter text here" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FocusOnInputSubmit;
