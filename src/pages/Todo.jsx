import React, { useEffect, useState, Suspense } from "react";
import ErrorBoundary from "../utills/ErrorBoundary";

import styled from "styled-components";
import { DefaultButton } from "../styles/Buttons";

import TodoList from "../components/TodoList";

import { createTodo, getTodos, updateTodo, deleteTodo } from '../api/api';

import Loading from "./Loading";
import Error from "./Error";

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoInputContainer = styled.fieldset`
  width: 77%;
  margin: 40px 0 40px 0;
  border: 1px gray solid;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
`;

const StyledInput = styled.input`
  width: 70%;
  margin: 10px 0;
  height: 3vh;
`;

const TodoListContainer = styled.div`
    width: 80%;
    height: 60vh;
    border: 1px gray solid;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    overflow: auto;
`;


const Todo = () => {

  const [todoInput, setTodoInput] = useState();
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTodoInput(value);
  };

  const handleCreateClick = async () => {
    try {
      const response = await createTodo(todoInput);
      setTodoList([...todoList, response.data]);
      alert("생성 성공!");
    } catch (error) {
      alert(`다음과 같은 이유로 생성이 실패했습니다 : ${error.response.data.message}`);
    }
  };

  return (
    <TodoContainer>

      <TodoInputContainer>
        <legend>할일 등록</legend>
        <StyledInput onChange={handleChange} />
        <DefaultButton onClick={handleCreateClick}>추가</DefaultButton>
      </TodoInputContainer>

      <TodoListContainer>
        <Suspense fallback={<Loading/>}>
          <ErrorBoundary fallback={<Error/>} >
            <TodoList />
          </ErrorBoundary>
        </Suspense>
      </TodoListContainer>

    </TodoContainer>
  );
};

export default Todo;
