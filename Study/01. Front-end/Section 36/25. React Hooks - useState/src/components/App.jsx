import React, { useState } from "react";

function App() {
  var [count, setCount] = React.useState(0);

  function increase() {
    setCount(count + 1);
    console.log(`I got clicked. (${count})`);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
      console.log(`I got clicked. (${count})`);
    }
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
