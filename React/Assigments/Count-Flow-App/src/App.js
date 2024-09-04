import './App.css';
import React, { useState } from 'react';


function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <h2>Count Flow</h2>
      <div id='counter'> {count} </div>
      <div>
        <button className='btn' onClick={() => setCount(count + 1)}> + </button>
        <button className='btn' onClick={() => setCount(count - 1)}> - </button>
      </div>
    </div>
  );
}

export default App;
