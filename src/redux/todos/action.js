import { LOADED, ADDED, DELETED, STATUS_TOGGLED, COLOR_CHANGED, COMPLETE_ALL, CLEAR_ALL } from "./actionType";

export const todoLoaded = (todos) => {
    return {
        type: LOADED,
        payload: todos
    }
}

export const addedNewTodo = (todo) => {
    return {
        type: ADDED,
        payload: todo
    }
}

export const deletedTodo = (todoId) => {
    return {
        type: DELETED,
        payload: todoId
    }
}

export const toggledStatus = (todoId) => {
    return {
        type: STATUS_TOGGLED,
        payload: todoId
    }
}

export const changedColor = (todoId, color) => {
    return {
        type: COLOR_CHANGED,
        payload: {
            todoId,
            color
        }
    }
}

export const completedAll = () => {
    return {
        type: COMPLETE_ALL
    }
}

export const clearedAll = () => {
    return {
        type: CLEAR_ALL
    }
}