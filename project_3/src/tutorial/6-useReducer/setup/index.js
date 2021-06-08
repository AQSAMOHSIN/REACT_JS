import React, { useState, useReducer } from "react";
import Modal from "./Modal";

// reducer function

const initialState = {
  people: [],
  isModalOn: false,
  modalContent: "WELCOME",
};

const reducer = (state, action) => {
  if (action.type === "submitted") {
    const newpeople = [...state.people, action.payload];
    return {
      ...state,
      people: newpeople,
      isModalOn: true,
      modalContent: "ITEM ADDED",
    };
  }

  if (action.type === "removePeople") {
    const newpeople = state.people.filter(
      (people) => people.id != action.payload
    );
    return {
      ...state,
      people: newpeople,
      isModalOn: true,
      modalContent: "ITEM DELETED",
    };
  }

  if (action.type === "closeModal") {
    return { ...state, isModalOn: false };
  }
};

const Index = () => {
  const [names, setNames] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const submithandler = (e) => {
    e.preventDefault();
    if (names) {
      dispatch({
        type: "submitted",
        payload: { id: new Date().getTime().toString(), names },
      });
      setNames("");
    } else {
      console.log("empty");
    }
  };

  const closeModal = () => {
    dispatch({ type: "closeModal" });
  };

  return (
    <>
      {state.isModalOn && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={submithandler} className="form">
        <div>
          <input
            type="text"
            value={names}
            onChange={(e) => setNames(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          ADD PEOPLE
        </button>
      </form>

      {state.people.map((person) => {
        return (
          <div className="item" key={person.id}>
            {person.names}
            <button
              onClick={() =>
                dispatch({ type: "removePeople", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
