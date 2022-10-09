import { wrapPromise } from "./wrapPromise";
import { getTodos } from "../api/api";
const todoListFetch = () => {
    const todoListPromise = getTodos;
    return {
        todoList: wrapPromise(todoListPromise),
    };
};

export default todoListFetch;