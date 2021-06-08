import React, { useState } from "react";

const ControlledInputs = () => {
  const [person, setPerson] = useState({ names: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const valuesUpdate = (e) => {
    const names = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [names]: value });
  };

  const putValues = (e) => {
    e.preventDefault();
    if (person.names && person.email && person.age) {
      const newperson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newperson]);
      setPerson({ names: "", age: "", email: "" });
      console.log("onSubmit sucess");
      console.log(people);
    } else {
      console.log("onSubmit fail");
      console.log("empty ");
    }
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="names">NAME:</label>
            <input
              type="text"
              name="names"
              id="names"
              value={person.names}
              onChange={valuesUpdate}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">EMAIL:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={person.email}
              onChange={valuesUpdate}
            />
          </div>

          <div className="form-control">
            <label htmlFor="age">age:</label>
            <input
              type="number"
              name="age"
              id="age"
              value={person.age}
              onChange={valuesUpdate}
            />
          </div>

          <button className="btn" type="submit" onClick={putValues}>
            add people
          </button>
        </form>
      </article>

      <article>
        {people.map((e) => {
          return (
            <div className="item" key={e.id}>
              <h4>{e.names}</h4>
              <h4>{e.email}</h4>
            </div>
          );
        })}
      </article>
    </>
  );
};

// const ControlledInputs = () => {
//   const [todoItem, setToDoItem] = useState("");
//   const [todes, settodes] = useState([]);

//   const change = (e) => {
//     e.preventDefault();

//     if (todoItem) {
//       const todoitem = { id: new Date().getTime().toString(), todoItem };
//       settodes((previous) => {
//         return [...previous, todoitem];
//       });
//     }
//     setToDoItem("");
//     console.log(todes);
//   };

//   const remove = (e) => {
//     console.log(e.target);
//   };

//   return (
//     <>
//       <article>
//         <form className="form" onSubmit={change}>
//           <div className="form-control">
//             <label htmlFor="todoItem">TASK: </label>
//             <input
//               type="text"
//               id="todoItem"
//               name="todoItem"
//               value={todoItem}
//               onChange={(e) => setToDoItem(e.target.value)}
//             />
//           </div>
//           <button type="submit">add TODO</button>
//         </form>
//       </article>

//       {todes.map((todo) => {
//         const { id, todoItem } = todo;
//         return (
//           <div className="item" key={id}>
//             <h4>{todoItem}</h4>
//             <p onClick={remove}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 class="bi bi-trash-fill"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
//               </svg>
//             </p>
//           </div>
//         );
//       })}
//     </>
//   );
// };

export default ControlledInputs;
