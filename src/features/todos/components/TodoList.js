import React from 'react'
import TodoGroup from './TodoGroup'
import TodoForm from './TodoForm'
import "../../styles/TodoList.css"
import { getTodos } from "../../apis/todos"
import { useEffect} from "react"
import { useDispatch } from 'react-redux'
import {AddTodos} from '../reducers/todosSlice'



function TodoList() {
    const dispatch = useDispatch();
    useEffect(() => {
       getTodos().then((response) => {
           
           dispatch(AddTodos(response.data));
       })       
    }, [dispatch])

    return (
        <div className="TodoList">
            <h1>TodoList</h1>
            <TodoGroup />
            <TodoForm />
        </div>
    )
}

export default TodoList
