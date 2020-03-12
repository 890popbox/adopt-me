import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";

//My application..
const App = () => {

  return (
    <div>
      <h1>
        <Link to="/">Adopt Me!</Link>
      </h1>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

//Call the react dom
render(<App />, document.getElementById("root"));
