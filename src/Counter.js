import React, { useState } from "react";


//1. Basic State Example using useState
function Counter() {
  const [count, setCount] = useState(0);

  function DecrementCounter() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>


      <div className="box-container">
        {Array.from({ length: count }, (_, index) => (
            <div key={index} className="box" />
        ))}
      </div>
      <button onClick={DecrementCounter}>Decrement</button>
    </div>
  );
}

export default Counter;
