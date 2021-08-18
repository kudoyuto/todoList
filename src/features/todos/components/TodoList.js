import React from 'react'
import TodoGroup from './TodoGroup'
import TodoForm from './TodoForm'
import "../../styles/TodoList.css"
import {getTodos} from "../../apis/todos"
import { useEffect} from "react"



function TodoList() {
    useEffect(() => {
       getTodos().then((response) => {
           console.log("response.data:", response.data)
       })
        return () => {
            
        }
    }, [])

    return (
        <div className="TodoList">
            <h1>TodoList</h1>
            <TodoGroup />
            <TodoForm />
        </div>
    )
}

export default TodoList
