
import { deletedTodo } from '../redux/todos/action';

const deleteTodo = (todoId) => {
    return async (dispatch) => {
        await fetch(`http://localhost:8000/todos/${todoId}`, {
            method: "DELETE",

        });
        console.log(todoId);

        dispatch(deletedTodo(todoId));
    }
}

export default deleteTodo;