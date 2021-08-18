import api from "../apis/index"

export const getTodos= () => {
   return  api.get("/todos")
}
