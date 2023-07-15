import React from "react";
import Name from "./Name.js";

const App = () => {
  let name = "Kumar";
  return (
    <div>
      <p>Props pass to other component </p>
      //--- added Component and pass the state
      <Name name={name} />
    </div>
  );
};

export default App;

//  Name Component

import React from "react";

const Name = (props) => {
  // get the props and destructing
  let { name } = props
  return (
    <div>
      <p> User name is {name}</p>
    </div>
  );
};

export default Name;

