
import { toggledStatus } from '../redux/todos/action';

const updateStatus = (todoId, currentStatus) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:8000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                completed: !currentStatus,
            }),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        });
        const todo = await response.json();
        console.log(todo.completed);

        dispatch(toggledStatus(todo.id));
    }
}

export default updateStatus;