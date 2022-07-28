import "./AddTodo.css"
<<<<<<< HEAD
import { useState } from "react"

import React from 'react'

const AddTodo = () => {
  const [input,setInput] = useState("")
  const [todo,setTodo] = useState([])

=======
import { useState, useContext } from "react"
import { Context } from "./App"
import React from 'react'

const AddTodo = () => {

  const {input, setInput, todo, setTodo} = useContext(Context);
  
>>>>>>> 4284c4d (React Todo App)
  const submiHandler = () => {
    if(input !== "") {
      setTodo([...todo,input])
      setInput("")
    }
  }

  return (
    <div>

      <div className="input-wrapper">
         
         <div className="input-add">
           <input onChange={(e) => setInput(e.target.value)} value={input} className="input" type="text" placeholder="Type your Todo"></input>
         </div>

         <div className="input-addbtn">
<<<<<<< HEAD
            <button onClick={submiHandler} className="addbtn">Add</button>
=======
            <button 
              onClick={submiHandler} className="addbtn">Add
            </button>
>>>>>>> 4284c4d (React Todo App)
         </div>

      </div>

    </div>
  )
}

export default AddTodo;