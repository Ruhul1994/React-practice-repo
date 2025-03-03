import { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0); // Start count from 0 for better semantics

  function handleClick() {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      alert(`Button clicked ${newCount} times`);
      return newCount;
    });
  }

  return (
    <div>
      <p>Button clicked {count} times</p> {/* Display the count */}
      <button
        className="bg-blue-400 cursor-pointer border rounded-xl p-2 hover:bg-red-400 active:bg-red-400"
        onClick={handleClick}
        aria-label="Click me"
      >
        MyButton
      </button>
    </div>
  );
}

export default Button;