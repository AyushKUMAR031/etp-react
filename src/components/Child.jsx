
const Child = ({ message }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{message}</p> {/* Displaying the message passed from Parent */}
    </div>
  );
};

export default Child;
