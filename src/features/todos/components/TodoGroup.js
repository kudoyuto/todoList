import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import { initialToDoList } from '../../../common/constants/constants'
import { getAllTodoIds } from '../../../common/utils/utils'
import {selectTodoIds} from '../reducers/todosSlice'

function TodoGroup() {
    const todoIds = useSelector(selectTodoIds);
    return (
        <div>
            {
                todoIds.map(id => (
                    <TodoItem key={id} id={id}/>
                ))
            }
            
            
        </div>
    )
}

export default TodoGroup
