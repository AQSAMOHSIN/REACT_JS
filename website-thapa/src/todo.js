import React, { useState, useReducer } from "react";
import Modal from "./modal";
const initialState = {
  todoitems: [],
  isModalon: false,
  modallCntent: "",
};

const reducer = (state, action) => {
  if (action.type === "add") {
    return {
      ...state,
      isModalon: true,
      modallCntent: "ITEM ADDED ",
      todoitems: [...state.todoitems, action.payload],
    };

    console.log(action.payload);
  }

  if (action.type === "remove") {
    const newtodo = state.todoitems.filter((todos) => {
      return todos.id != action.payload;
    });
    return {
      ...state,
      isModalon: true,
      modallCntent: "ITEM DELETED",
      todoitems: newtodo,
    };
  }

  if (action.type === "close") {
    return {
      ...state,
      isModalon: false,
    };
  }
};

const Todo = () => {
  const [todo, settodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitHandler = (e) => {
    e.preventDefault();

    if (todo) {
      dispatch({
        type: "add",
        payload: { id: new Date().getTime().toString(), todo },
      });
      console.log(todo);
      console.log(state);
      settodo("");
    }
  };

  const closeModal = () => {
    dispatch({ type: "close" });
  };
  return (
    <>
      {state.isModalon && (
        <Modal closeModal={closeModal} content={state.modallCntent} />
      )}
      <article>
        <form className="form" onSubmit={submitHandler}>
          <div className="form-control">
            <input
              type="text"
              value={todo}
              onChange={(e) => settodo(e.target.value)}
            />
          </div>

          <button type="submit" className="btn">
            ADD TODO
          </button>
        </form>
        {state.todoitems.map((todos) => {
          return (
            <div className="item" key={todos.id}>
              {todos.todo}
              <button
                onClick={() => dispatch({ type: "remove", payload: todos.id })}
              >
                remove
              </button>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Todo;
