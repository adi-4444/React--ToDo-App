import "./AddTodo.css"
import { useState } from "react"

import React from 'react'

const AddTodo = () => {
  const [input,setInput] = useState("")
  const [todo,setTodo] = useState([])

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
            <button onClick={submiHandler} className="addbtn">Add</button>
         </div>

      </div>

    </div>
  )
}

export default AddTodo;