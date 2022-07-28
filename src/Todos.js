import "./Todos.css"
<<<<<<< HEAD
import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Todos = () => {
  return (
    <div>
      <div className="todolist">
         <div className="atodo">
           <h3 className="todo">Your first Todo</h3>
           <div className="actions">
              <div className="edit"><FaEdit /></div>
              <div className="delete"><MdDelete /></div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Todos;
=======
import React, {useContext} from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Context } from "./App"

const Todos = () => {

  const {todo, setTodo} = useContext(Context);


  return (
    <div>

    <div className="todolist">
    {
       todo.map ((todos,index) => {

         return (

           <div className="atodo">
                <h3 className="todo" key={index}>{todos}</h3>  
                  <div className="actions">
                      <div className="edit"><FaEdit /></div>
                      <div className="delete"><MdDelete /></div>
                   </div>  
           </div>
        )
            })
    }
    </div>

  </div>
    
  )
}

export default Todos;

>>>>>>> 4284c4d (React Todo App)
