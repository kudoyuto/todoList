import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Radio } from 'antd';

import { selectTodoById, ToggleTodo, RemoveTodo} from "../reducers/todosSlice"
import "../../styles/TodoItem.css"
import { updateTodo, removeTodo } from "../../apis/todos"



function TodoItem(props) {


    const todo =useSelector(state => selectTodoById(state, props.id))
    const dispatch = useDispatch();
    const [size, setSize] = useState("small");
    
    function handleClick() {
        updateTodo(props.id, {done:!todo.done}).then(response => {
            
            dispatch(ToggleTodo({id:props.id, updateTodo:response.data}));
        });
         
    }
    function handleDelete() {
        removeTodo(props.id).then((response) =>{
           dispatch(RemoveTodo(props.id));
        });
        
    }

    const todoStatus = todo.done ? "done": "";
    return (
        <div className="TodoList">
            <div className="TodoListBox">
                <span className={`TodoItem-todo ${todoStatus}`} onClick={handleClick}>{todo.text}</span>
            <Button type="primary" className="delete" size= {size} onClick={handleDelete}>x</Button>
            </div>
            
            
        </div>
    )
}

export default TodoItem
