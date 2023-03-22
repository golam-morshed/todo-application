
import { addedNewTodo } from '../redux/todos/action';

const addNewTodo = (todoText) => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:8000/todos", {
            method: "POST",
            body: JSON.stringify({
                text: todoText,
                completed: false,
            }),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        });
        const todo = await response.json();
        console.log(todo);

        dispatch(addedNewTodo(todo.text));
    }
}

export default addNewTodo;