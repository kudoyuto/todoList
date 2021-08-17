export function getAllTodoIds(todos) {
    return todos.map(todo => todo.id);
}

export function getToDoByIds(todos, id) {

    return todos.find(todo => todo.id === id);

}


