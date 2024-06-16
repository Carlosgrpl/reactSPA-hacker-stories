import "../App.jsx";

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

function List() {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectid}>
            <span>
              <a href={item.url}>{item.tile}</a>
            </span>
            <span> {item.author}</span>
            <span> {item.num_comments}</span>
            <span> {item.points}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
{
  /*In React (and in many JavaScript frameworks), the export default statement is used to make a component or any other JavaScript entity (like functions, objects, or variables) available for use in other parts of your application.

    Explanation:
    Exporting Components:
    
    When you define a component, such as List, you need to export it so that it can be imported and used in other parts of your application.
    export default vs export:
    
    export default List;: This statement means that when another file imports from "./components/List", it will receive whatever List refers to. In this case, it's likely a React component named List. The default keyword means that if another file imports List without curly braces (import List from "./components/List"), it will receive the default export from that file.
    Without this line, other parts of your application wouldn't know about List component and wouldn't be able to use it.*/
}
