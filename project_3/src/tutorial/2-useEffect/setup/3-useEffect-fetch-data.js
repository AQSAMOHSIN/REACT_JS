import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [people, setPeople] = useState([]);
  const getpeople = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPeople(data);
  };
  useEffect(() => {
    getpeople();
  }, []);

  return (
    <>
      <h1>people on github</h1>

      <ul>
        {people.map((e) => {
          const { id, login, type, avatar_url } = e;
          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <div>
                <h1>{login}</h1>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
