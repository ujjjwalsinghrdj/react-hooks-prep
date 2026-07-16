import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import TopicLists from "./components/TopicLists";
import Cards from "./components/Cards";

function App() {
  const handleShowName = function () {
    alert("ujjwal");
  };
  return (
    <Container>
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
    </Container>
  );
}

export default App;
