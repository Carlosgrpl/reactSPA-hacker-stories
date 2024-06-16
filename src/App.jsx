import "./App.css";
import List from "./components/List";

function App() {
  return (
    <div>
      <h1> My hacker stories </h1>
      <label htmlFor="search">Search:</label> {/*Label y htmlFor van juntas */}
      <input id="search" type="text" /> {/*input no necesita cierre de etiq*/}
      <hr /> {/*hr es una linea horizontal o salto de línea*/}
      <List /> {/*Llamo a mi componente List, importo de archivo List.jsx*/}
    </div>
  );
}

export default App;
