import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectTodoById, ToggleTodo, RemoveTodo} from "../reducers/todosSlice"
import "../../styles/TodoItem.css"

function TodoItem(props) {
    
    
    const todo =useSelector(state => selectTodoById(state, props.id))
    const dispatch = useDispatch();
    
    function handleClick() {
        dispatch(ToggleTodo(props.id));
    }
    function handleDelete() {
        dispatch(RemoveTodo(props.id));
    }

    const todoStatus = todo.done ? "done": "";
    return (
        <div className="TodoList">
            
            <span className={`TodoItem-todo ${todoStatus}`} onClick={handleClick}>{todo.text}</span>
            <button className="delete"onClick={handleDelete}>X</button>
        </div>
    )
}

export default TodoItem
