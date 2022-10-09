import React from "react";
import styled from "styled-components";
import { DefaultButton } from "../styles/Buttons";
import TodoItem from "../components/TodoItem";

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


  return (
    <TodoContainer>


      <TodoInputContainer>
        <legend>할일 등록</legend>
        <StyledInput />
        <DefaultButton>추가</DefaultButton>
      </TodoInputContainer>


      <TodoListContainer>
        {/* <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem /> */}
      </TodoListContainer>




      
    </TodoContainer>
  );
};

export default Todo;
