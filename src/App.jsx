import "./App.css";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h1> My hacker stories </h1>
      <label htmlFor="search">Search:</label> {/*Label y htmlFor van juntas */}
      <input id="search" type="text" /> {/*input no necesita cierre de etiq*/}
      <hr /> {/*hr es una linea horizontal o salto de línea*/}
      <ul>
        {list.map(function (item) {
          return;
          <li key={item.objectid}>
            <span>
              <a href={item.url}>{item.tile}</a>
            </span>
            <span> {item.author}</span>
            <span> {item.num_comments}</span>
            <span> {item.points}</span>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default App;
