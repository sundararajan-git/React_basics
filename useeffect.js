import React, { useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("Arun");
  const changeName = () => {
    setName("Kumar");
  };
  // Run on every render
  useEffect(() => {
    console.log("Run on every render");
  });

  // Runs only on first render
  useEffect(() => {
    console.log("Runs only on first render ");
  }, []);

  // Runs only on first render and any dependency value changes

  useEffect(() => {
    console.log("render dependency changes and first render");
  }, [name]);
  return (
    <div>
      <p>User Name is {name}</p>
      <button onClick={changeName}>Change</button>
    </div>
  );
};

export default App;
