import React from 'react';
import { render } from 'react-dom';
import Pet from "./Pet";

//My application..
const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel"
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" })
  ]);
};

//Call the react dom
render(React.createElement(App), document.getElementById("root"));
