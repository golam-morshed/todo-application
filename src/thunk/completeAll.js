
import { completedAll } from '../redux/todos/action';

const completeAll = () => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:8000/todos`);
        const todos = await response.json();
        todos.forEach(async todo => {
            const response = await fetch(`http://localhost:8000/todos/${todo.id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    completed: true,
                }),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            });
            console.log(response);
        });

        dispatch(completedAll());
    }
}

export default completeAll;