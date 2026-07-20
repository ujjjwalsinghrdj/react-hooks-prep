import React, { useReducer, useState } from "react";

const initialSate = { todos: [], nextId: 1 };

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: state.nextId, text: action.payload, done: false },
        ],
        nextId: state.nextId + 1,
      };
    case "remove":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "toggle":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
        ),
      };
    default:
      return state;
  }
};
const Todos = () => {
  const [state, dispatch] = useReducer(reducer, initialSate);
  const [text, setText] = useState("");

  function handleAdd() {
    dispatch({ type: "add", payload: text });
    setText("");
  }
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                color: todo.done ? "red" : "black",
              }}
              onClick={() => dispatch({ type: "toggle", payload: todo.id })}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: "remove", payload: todo.id })}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
