import React, { useState } from "react";

const UseStateCounter = () => {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
  };
  const decrease = () => {
    setNum(num - 1);
  };

  return (
    <>
      <article>
        <h2>Normal counter</h2>
        <h1>{num}</h1>
        <button className="btn" onClick={increase}>
          increase
        </button>
        <button className="btn" onClick={() => setNum(0)}>
          reset
        </button>
        <button className="btn" onClick={decrease}>
          decrease
        </button>
      </article>
    </>
  );
};

export default UseStateCounter;
