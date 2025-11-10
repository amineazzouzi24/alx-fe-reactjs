import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Counter Application</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 15px',
            fontSize: '16px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          ➕ Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          style={{
            padding: '10px 15px',
            fontSize: '16px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          ➖ Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          style={{
            padding: '10px 15px',
            fontSize: '16px',
            backgroundColor: 'gray',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
