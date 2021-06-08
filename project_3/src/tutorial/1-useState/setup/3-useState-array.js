import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [person, setperson] = React.useState(data);

  const remove = (id) => {
    let newpeople = person.filter((e) => e.id != id);
    setperson(newpeople);
  };

  return (
    <React.Fragment>
      {person.map((e) => {
        const { id, name } = e;
        return (
          <div className="item" key={id}>
            {name}
            <button onClick={() => remove(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setperson([])}>
        clear item
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
