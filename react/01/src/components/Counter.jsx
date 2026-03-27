import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex items-center justify-center'>
      <h1>Count: {count}</h1>
      <button className='font-bold bg-red' onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
