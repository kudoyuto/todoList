import api from "../apis/index"

export const getTodos= () => {
   return  api.get("/todos")
}
export const createTodo = (text) => {
    return api.post("/todos", {text})
}

export const updateTodo = (id, updateTodo) => {
    return api.put(`/todos/${id}`, updateTodo)
}

export const removeTodo = (id) => {
    return api.delete(`/todos/${id}`)
}
