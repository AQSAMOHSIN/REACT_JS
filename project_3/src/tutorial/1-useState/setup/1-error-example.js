import React, { useState } from "react";

const ErrorExample = () => {
  const [msg, setMsg] = useState("hello world1");
  const changevalue = () => {
    if (msg == "hello world1") {
      setMsg("randon msg");
    } else {
      setMsg("hello world1");
    }
  };
  return (
    <React.Fragment>
      <h1>{msg}</h1>
      <button className="btn" onClick={changevalue}>
        change message
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
