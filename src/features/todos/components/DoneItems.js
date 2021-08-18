import React from 'react'
import {selectDoneList} from '../reducers/todosSlice'
import TodoItem from './TodoItem'
import {useSelector } from 'react-redux'

function DoneItems() {
   const doneList = useSelector(selectDoneList);
    return (
        <div>
             
            {
                doneList.map(todo=> (
                    <TodoItem key={todo.id} id={todo.id}/>
                ))
            }
            
            
        
        </div>
    )
}

export default DoneItems
