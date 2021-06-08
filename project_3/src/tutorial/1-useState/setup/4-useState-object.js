import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setObje] = useState({
    name: "aqsa",
    age: 19,
    msg: "hi there i am learing react",
  });

  const change = () => {
    setObje({ ...person, msg: "thank you" });
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.msg}</h1>
      <button className="btn" onClick={change}>
        appreciated
      </button>
    </>
  );
};

export default UseStateObject;
