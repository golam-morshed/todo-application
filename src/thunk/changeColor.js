
import { changedColor } from '../redux/todos/action';

const changeColor = (todoId, color) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:8000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                color: color,
            }),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        });
        const todo = await response.json();
        console.log(todo.completed);

        dispatch(changedColor(todo.id, todo.color));
    }
}

export default changeColor;