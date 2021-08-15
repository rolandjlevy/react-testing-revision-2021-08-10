import React, { useState } from 'react';

const Clicker = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = (n) => {
    setCounter(counter + n)
  }
  return (
    <main>
      <h1>Counter: {counter}</h1>
      <button onClick={() => handleClick(-1)}>Subtract</button>
      <button onClick={() => handleClick(1)}>Add</button>
    </main>
  );
}

export default Clicker;