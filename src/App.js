import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

//My application..
const App = () => {

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

//Call the react dom
render(<App />, document.getElementById("root"));
