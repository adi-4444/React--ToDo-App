import { useState } from "react";
import { useState, createContext } from "react";
import AddTodo from "./AddTodo";
import "./App.css";
import Todos from "./Todos";

export const Context = createContext();

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <Context.Provider value={{ input, setInput, todo, setTodo }}>
        <div className="title">
          <h1 className="title-name">React Todo App</h1>
        </div>

        <div className="components">
          <AddTodo />
          <Todos />
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
