export default {
    getAll: () => fetch(
        "http://localhost:8080/api/todos",
        {mode: 'cors'}
    ),
    createTodo: (todo) => fetch(
        "http://localhost:8080/api/todos", {
            mode: 'cors',
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(todo)
        }),
    retainCheck: (todo) => fetch(
        "http://localhost:8080/api/todos/" + todo.id, {
            mode: 'cors',
            method: 'PATCH',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                "status": todo.status
            })
        })
}
