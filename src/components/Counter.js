// src/components/Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const maxCount = 10;

  const handleIncrement = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-box"> {/* Apply the 3D box styling directly */}
      <h1>Counter Value: {count}</h1>
      <div className='button-container'>
      
      <button onClick={handleDecrement} disabled={count === 0}>
        -
      </button>
      <button onClick={handleIncrement} disabled={count === maxCount}>
        +
      </button>
      </div>
    </div>
  );
};

export default Counter;
