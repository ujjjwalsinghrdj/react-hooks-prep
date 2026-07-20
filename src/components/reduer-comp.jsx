import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "incrementBuAmount":
      return { count: state.count + action.payload };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

const Reducer_main = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <section className="my-2">
      <p className="">{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button
        onClick={() => dispatch({ type: "incrementBuAmount", payload: 5 })}
      >
        5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </section>
  );
};

export default Reducer_main;
