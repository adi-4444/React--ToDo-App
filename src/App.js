import { useState } from 'react';
import AddTodo from './AddTodo';
import './App.css';
import Todos from './Todos';

function App() {

  
  return (
    <div className="App">
      
          <div className="title">
             <h1 className='title-name'>React Todo App</h1>
          </div>

         <div className="components">
           <AddTodo />
           <Todos />
         </div>

    </div>
  );
}

export default App;


