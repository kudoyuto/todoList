import api from "../apis/index"

export const getTodos= () => {
   return  api.get("/todos")
}
export const createTodo = (text) => {
    return api.post("/todos", {text})
}


