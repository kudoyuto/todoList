import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import "../../styles/TodoForm.css"
import { AddTodo } from "../reducers/todosSlice"


function TodoForm() {

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(e) {
        setText(e.target.value);
        
    }
    function handleAdd() {
        dispatch(AddTodo(text));
        setText("");
        
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
