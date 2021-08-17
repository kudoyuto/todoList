import React from 'react'
import { useSelector } from 'react-redux'

import { initialToDoList } from '../../../common/constants/constants'
import { getToDoByIds } from '../../../common/utils/utils'
import { selectTodoById } from "../reducers/todosSlice"

function TodoItem(props) {
    
    
    const todo =useSelector(state => selectTodoById(state, props.id))
    return (
        <div>
            {todo.text}
        </div>
    )
}

export default TodoItem
