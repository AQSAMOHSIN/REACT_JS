import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const callback = () => {
    setSize(window.innerWidth);
  };
  window.addEventListener("resize", callback);

  useEffect(() => {
    window.removeEventListener("resize", callback);
  });
  return (
    <>
      <h1>windows</h1>
      <h1>{size}</h1>
    </>
  );
};

export default UseEffectCleanup;
