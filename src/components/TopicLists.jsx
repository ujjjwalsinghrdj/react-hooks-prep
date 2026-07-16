import React from "react";
import reactImg from "../assets/react-core-concepts.png";
import { Button } from "react-bootstrap";

const TopicLists = ({ userNames, userAge, userGender, onShow, isAdmin }) => {
  //   const reactRandomAge = [23, 32, 44, 56, 76, 67];

  //   function getRandomAge(max) {
  //     return Math.floor(Math.random() * max.length);
  //   }

  //   function getRandomName(user) {
  //     return Math.floor(Math.random() * (user + 1));
  //   }

  //   const name = reactRandomName[getRandomName(2)];
  //   const age = reactRandomAge[getRandomAge(reactRandomAge)];

  return (
    <>
      <h2>User Description</h2>
      {isAdmin ? <p>You are the admin</p> : <p>You are not the admin</p>}
      <ul>
        <li>
          {userNames.map((name, i) => (
            <p>
              {i + 1} - {name}
            </p>
          ))}
        </li>
        <li>{userAge.age}</li>
        <li>{userGender}</li>
      </ul>
      <img src={reactImg} alt="dadasd" />
      <Button variant="primary" onClick={onShow}>
        Show Name
      </Button>
    </>
  );
};

export default TopicLists;
