import React from 'react';

import todoListFetch from "../utills/todoListFetch";
import TodoItem from "../components/TodoItem";
import Todo from '../pages/Todo';

const resource = todoListFetch();

const TodoList = () => {

    const todoList = resource.todoList.read();

    console.log(todoList)
    
    return (
        <>
        {
            todoList.data.map((todo) => (
                <TodoItem todo={todo}/>
            ))
        }
        </>
    );
};

export default TodoList;