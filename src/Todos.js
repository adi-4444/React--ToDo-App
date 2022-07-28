import "./Todos.css"
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