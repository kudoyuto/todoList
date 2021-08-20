import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { selectTodoById, ToggleTodo, RemoveTodo} from "../reducers/todosSlice"
import "../../styles/TodoItem.css"
import { updateTodo, removeTodo } from "../../apis/todos"

import { Modal, Button, Input} from 'antd';



function TodoItem(props) {


    const todo = useSelector(state => selectTodoById(state, props.id))
    const dispatch = useDispatch();
    const [size, setSize] = useState("small");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { TextArea } = Input;
    const showModal = () => {
        setIsModalVisible(true);
      };
      const [text,setText] = useState("");
    
      const handleOk = () => {
        updateTodo(props.id, {text:text}).then(response => {
            console.log(response);
            
           dispatch(ToggleTodo({id:props.id, updateTodo:response.data}));
        });
        setIsModalVisible(false);
        
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    
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
    function handleChange(e) {
        setText(e.target.value);
        
    }

    const todoStatus = todo.done ? "done": "";
    return (
        <div className="TodoList">
            <div className="TodoListBox">
                <span className={`TodoItem-todo ${todoStatus}`} onClick={handleClick}>{todo.text}</span>
                
                
            <Button type="primary" className="delete" size= {size} onClick={handleDelete}>x</Button>
            <Button type="primary" className="delete" onClick={showModal}>Update</Button>
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <TextArea className={`todo-itembtn-${todoStatus}`} defaultValue={todo.text}  value ={text} onChange={handleChange}/>     
                </Modal>
            
            
            </div>
           
            
            
        </div>
    )
}

export default TodoItem
