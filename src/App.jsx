import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import TopicLists from "./components/TopicLists";
import Cards from "./components/Cards";
import { useState } from "react";
import Reducer_main from "./components/reduer-comp";
import Todos from "./components/Todos";

function App() {
  const [initial, setInitial] = useState(0); //basic
  const [user, setUser] = useState({ name: "ujjwal", age: 25 }); //object
  const [updateName, setUpdateName] = useState(["ujjwal", "prajjwal", "rishi"]);

  function addName(text) {
    setUpdateName([...updateName, text]);
  }

  function removeName(index) {
    setUpdateName(
      updateName,
      filter((_, i) => i !== index),
    );
  }
  function UpdateAge() {
    setUser({ ...user, name: "prajjwal" });
  }

  function handleNumIncrease() {
    setInitial((prev) => prev + 1);
    console.log(initial);
  }

  const handleShowName = function () {
    alert("ujjwal");
  };
  return (
    <Container>
      <ul>
        {updateName.map((t, i) => {
          <li key={i} onClick={() => removeName(i)}>
            {t}
          </li>;
        })}
      </ul>
      <p>
        {user.name} is {user.age}
      </p>
      <button className="btn btn-danger" onClick={UpdateAge}>
        change age
      </button>
      <h2>{initial}</h2>
      <button className="btn btn-primary" onClick={handleNumIncrease}>
        +
      </button>
      <Cards title="react session 1 about props">
        <h3>Hello React</h3>
        <p>Learn React</p>
        <Button variant="secondary">Read More</Button>
      </Cards>
      <h1 className="mt-2">Welcome to React hooks prep App</h1>
      <TopicLists
        userNames={["ujjwal", "rishi", "buddo"]} // array
        userAge={{ name: "ujjwal", age: 27, city: "pune" }} //object
        userGender="Male" // string
        onShow={handleShowName} //function
        isAdmin={true} // cpnditional rendering
      />
      <Reducer_main />
      <Todos/>
    </Container>
  );
}

export default App;
