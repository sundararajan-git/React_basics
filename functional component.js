const App = () => {
  return (
    <div>
      <div className="JSX">
        <p>JSX stands for JavaScript XML.</p>
        <p>JSX allows us to write HTML in React.</p>
        <p>JSX makes it easier to write and add HTML in React.</p>
      </div>
      <div className="input">
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id="name" placeholder="Your Name" />
      </div>
      <p>React is {5 + 5} times better with JSX</p>
      {true && <p>Hello world</p>}
    </div>
  );
};
