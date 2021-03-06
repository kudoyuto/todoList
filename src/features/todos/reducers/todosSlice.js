import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import {v4 as uuid } from "uuid"

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
   
});

const todosSlice = createSlice({
    name:"todos",
    initialState: initialState,
    reducers:{
        AddTodo(state, action) {

            todosAdapter.addOne(state, action.payload);
               
        },
        ToggleTodo(state, action) {
            todosAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload.updateTodo
            })
            
        },
        RemoveTodo(state, action) {
            
            todosAdapter.removeOne(state,action.payload);

        },
        AddTodos(state, action) {
            todosAdapter.addMany(state, action.payload);
            

        },
        

    },
});
export const {AddTodo, ToggleTodo, RemoveTodo, AddTodos} =  todosSlice.actions;

export default todosSlice.reducer;

export const {selectIds: selectTodoIds, selectById: selectTodoById, selectAll: selectTodos } = todosAdapter.getSelectors(
    (state) => state.todoList
);

export const selectDoneList = createSelector([selectTodos], (todos) => {
    console.log("todos:", todos);
    return todos.filter((todo) => todo.done);
})
