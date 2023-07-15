import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Arun"); // string
  const [age, setAge] = useState([21, 43, 56]);  // array 
  const [userstatus, setUserstatus] = useState({ user: "Log out" }); // object

  // change state
  const changeState = () => {
    setName("Kumar");
    setAge({ ...age, [0]: 25 });
    setUserstatus({ user: "Log in" });
  };
  
  return (
    <div>
      <div className="states">
        <p>User name is {name}</p>
        <p>User age is {age[0]}</p>
        <p>User status {userstatus.user}</p>
      </div>
      <div className="change">
        <button onClick={changeState}>Change</button>
      </div>
    </div>
  );
};

export default App;
