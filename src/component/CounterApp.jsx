import React, { useState, useEffect } from 'react';
import "./CounterApp.css";

function CounterApp() {
  const [startPosition, setStartPosition] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;
    if (count > 0) {
      timer = setTimeout(() => setCount(count - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [count]);

  const handleStartChange = (event) => {
  const value = parseInt(event.target.value);
  if (isNaN(value)) {
    setStartPosition('Give me timer');
    setCount(0);
  } else {
    setStartPosition(value);
    setCount(value);
  }
};

  return (
    <div>
      <h1>Counter App</h1>
      <input
        type="number"
        value={startPosition}
        onChange={handleStartChange}
        placeholder="Enter start position"
      />
      <h2>Count: {count}</h2>
    </div>
  );
}

export default CounterApp;
