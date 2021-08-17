import React from 'react'
import {useState} from 'react'
import "../../styles/TodoForm.css"


function TodoForm() {

    const [text, setText] = useState("");
    function handleChange(e) {
        setText(e.target.value);
        console.log(e.target.value);
    }
    function handleAdd() {
        console.log("AddButton ", text);
    }
    return (
        <div className="TodoForm">
            <input type ="text" 
            placeholder="input a new todo item" 
            value ={text}
            onChange= {handleChange}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default TodoForm
