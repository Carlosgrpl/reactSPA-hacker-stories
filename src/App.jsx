import "./App.css";

const title = "React";

function App() {
  return (
    <div>
      <h1>Hello {title}!</h1>
      <label htmlFor="search">Search:</label> /* This is how we display HTML in
      JSX */
      <input id="search" type="text" /> /* Input is an HTML element, so we use
      JSX with the id from htmlFor */
    </div>
  );
}

export default App;
