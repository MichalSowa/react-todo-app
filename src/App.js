import React from "react";
import "./App.scss";
import "primereact/resources/themes/saga-blue/theme.css"; // PrimeReact theme
import "primereact/resources/primereact.min.css"; // PrimeReact core css
import "primeicons/primeicons.css";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
