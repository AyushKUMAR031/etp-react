import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("Hello from Parent!");

  return (
    <div>
      <h1>Parent Component</h1>
      <Child message={message} />
    </div>
  );
};

export default Parent;
