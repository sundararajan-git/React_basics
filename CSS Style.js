import React from "react";

const App = () => {
  const mystyle = {
    color: "green",
  };
  return (
    <div>
      // ----- inline style
      <p style={{ color: "red" }}>Inline CSS style</p>
       // --- internal style
      <p style={mystyle}>Internal CSS style</p>
       // --- seprate file and  write css
      <p>External CSS style</p>
    </div>
  );
};

export default App;
