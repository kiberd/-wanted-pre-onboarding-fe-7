import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { createTodo, getTodos, updateTodo, deleteTodo } from '../api/api';

import TodoItem from "../components/TodoItem"
import Loading from "../components/Loading";
import Error from "../components/Error";
import NoData from "../components/NoData";

import { DefaultButton } from "../styles/Buttons";

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

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function fecthTodoList() {
    try {
      setIsLoading(true);
      const response = await getTodos();
      setTodoList(response.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fecthTodoList();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setTodoInput(value);
  };

  const handleCreateClick = async () => {
    try {
      const response = await createTodo(todoInput);
      setTodoInput("");
      fecthTodoList();
      alert("생성 성공!");
    } catch (error) {
      alert(`다음과 같은 이유로 생성이 실패했습니다 : ${error.response.data.message}`);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await deleteTodo(id);
      fecthTodoList();
      alert("삭제 성공!");
    } catch (error) {
      alert(`다음과 같은 이유로 삭제가 실패했습니다 : ${error.response.data.message}`);
    }
  };

  const handleUpdateClick = async (id, todo, isCompleted) => {
    try {
      const response = await updateTodo(id, todo, JSON.parse(isCompleted));
      fecthTodoList();
      alert("갱신 성공!");
      return response;
    } catch (error) {
      alert(`다음과 같은 이유로 삭제가 실패했습니다 : ${error.response.data.message}`);
      return error;
    }
  };

  return (
    <TodoContainer>
      <TodoInputContainer>
        <legend>할일 등록</legend>
        <StyledInput onChange={handleChange} value={todoInput} />
        <DefaultButton onClick={handleCreateClick}>추가</DefaultButton>
      </TodoInputContainer>
      <TodoListContainer>
        {isError ? <Error /> : null}
        {isLoading ? <Loading /> :
          todoList.length === 0 ? <NoData text="할일 목록이 비었습니다." /> :
            todoList.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onHandleDeleteClick={handleDeleteClick} onHandleUpdateClick={handleUpdateClick} />
            ))
        }
      </TodoListContainer>
    </TodoContainer>
  );
};

export default Todo;
