import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectTodoById, ToggleTodo} from "../reducers/todosSlice"
import "../../styles/TodoItem.css"
function TodoItem(props) {
    
    
    const todo =useSelector(state => selectTodoById(state, props.id))
    const dispatch = useDispatch();
    
    function handleClick() {
        dispatch(ToggleTodo(props.id));
    }

    const todoStatus = todo.done ? "done": "";
    return (
        <div className={`TodoItem-todo ${todoStatus}`} onClick={handleClick}>
            {todo.text}
        </div>
    )
}

export default TodoItem
