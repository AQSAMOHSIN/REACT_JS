import React, { useState, useEffect } from "react";

const ShowHide = () => {
  //   const [show, setShow] = useState(false);
  //   const [value, setValue] = useState("show");

  //   const change = () => {
  //     setShow(!show);

  //     if (show) {
  //       setValue("show");
  //     } else {
  //       setValue("hide");
  //     }
  //   };
  //   return (
  //     <>
  //       <button className="btn" onClick={change}>
  //         {value}
  //       </button>
  //       {show && <Item />}
  //     </>
  //   );
  // };
  // const Item = () => {
  //   const [size, setSize] = useState(window.innerWidth);

  //   function change() {
  //     setSize(window.innerWidth);
  //   }
  //   useEffect(() => {
  //     window.addEventListener("resize", change);
  //     return () => {
  //       window.removeEventListener("resize", change);
  //     };
  //   }, []);

  //   return (
  //     <>
  //       <h1>windows</h1>
  //       <h4>size:{size}px</h4>
  //     </>
  //   );
  // };

  const [show, setShow] = useState(false);
  const [value, setValue] = useState("show");
  const change = () => {
    setShow(!show);
    if (show) {
      setValue("show");
    } else {
      setValue("hide");
    }
  };

  return (
    <>
      <button className="btn" onClick={change}>
        {value}
      </button>

      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const change = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", change);
    return () => {
      window.removeEventListener("resize", change);
    };
  }, []);
  return (
    <>
      <article>
        <div>
          <h1>windows</h1>
          <h3>size:{size}</h3>
        </div>
      </article>
    </>
  );
};

export default ShowHide;
