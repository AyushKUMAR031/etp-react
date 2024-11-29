import React, { useState } from 'react';

const HideElementExample = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleHide = () => {
    setIsVisible(false); // Hide the element
  };

  return (
    <div>
      <h2>Hide Element Example</h2>
      {isVisible && <p>This is a visible element. Click the button to hide me.</p>}
      <button onClick={handleHide}>Hide Element</button>
    </div>
  );
};

export default HideElementExample;
