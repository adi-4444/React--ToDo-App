<<<<<<< HEAD
import { useState } from 'react';
=======
import { useState, createContext} from 'react';
>>>>>>> 4284c4d (React Todo App)
import AddTodo from './AddTodo';
import './App.css';
import Todos from './Todos';

<<<<<<< HEAD
function App() {

  
  return (
    <div className="App">
=======
export const Context = createContext()

function App() {
  const [input,setInput] = useState("")
  const [todo,setTodo] = useState([])
  
  return (
    <div className="App">
        <Context.Provider value={{input, setInput,todo,setTodo}}>
>>>>>>> 4284c4d (React Todo App)
      
          <div className="title">
             <h1 className='title-name'>React Todo App</h1>
          </div>

         <div className="components">
           <AddTodo />
           <Todos />
         </div>

<<<<<<< HEAD
=======
         </Context.Provider>
>>>>>>> 4284c4d (React Todo App)
    </div>
  );
}

export default App;


