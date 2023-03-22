
import { todoLoaded } from '../redux/todos/action';

const fetchTodos = async (dispatch) => {
    const response = await fetch("http://localhost:8000/todos");
    const todos = await response.json();

    dispatch(todoLoaded(todos));
}

export default fetchTodos;