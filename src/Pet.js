import React from "react";
export default function Pet({ name, animal, breed }) {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, name),
  //   React.createElement("h2", {}, animal),
  //   React.createElement("h2", {}, breed)
  // ]);
  //Below will do the same thing as the commented out section..
//You can run Javascript here, needs to be one line, ternarys work.
  return (
    <div>
      <h1>{name.toUpperCase()}</h1>
      <h2>{animal}</h2>
      <h2>{breed + breed}</h2>
    </div>
  )
};
