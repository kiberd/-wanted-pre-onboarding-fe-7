import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DefaultButton } from "../styles/Buttons";

const TodoItemContainer = styled.div`
  display: flex;
  width: 90%;
  border-bottom: 1px gray solid;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;

const TodoContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  padding-bottom: 5px;
  p {
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  span {
    color: white;
    font-size: 10px;
    background-color: ${props => props.isCompleted ? "green" : "gray"};
    border: 1px solid;
    border-radius: 10px;
    width: fit-content;
    padding: 5px 10px;

  }
`;

const TodoControlPanel = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-evenly;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  margin: 10px 0;
`;

const StyledSelect = styled.select`
  width: 30%;
  height: 35px;
  background: white;
  color: gray;
  font-size: 14px;
  border: 1px solid;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
  }
`;

const TodoItem = ({ todo, onHandleDeleteClick, onHandleUpdateClick }) => {

  const [isModify, setIsModify] = useState(false);

  const [todoInput, setTodoInput] = useState(todo.todo);
  const [todoIsCompleted, setTodoIsCompleted] = useState(todo.isCompleted);

  useEffect(() => {
    setTodoInput(todo.todo);
    setTodoIsCompleted(todo.isCompleted);
  }, [isModify])


  const handleUpdateClick = async () => {
    const result = await onHandleUpdateClick(todo.id, todoInput, todoIsCompleted);
    if (result.status === 200) setIsModify(false);
  };

  const handleDeleteClick = () => {
    onHandleDeleteClick(todo.id);
  };

  return (
    <TodoItemContainer>
      <TodoContents isCompleted={todo.isCompleted}>
        {isModify ? (
          <>
            <StyledInput value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
            <StyledSelect defaultValue={todoIsCompleted} onChange={(e) => setTodoIsCompleted(e.target.value)}>
              <option value={true}>완료</option>
              <option value={false}>미완료</option>
            </StyledSelect>
          </>
        ) : (
          <>
            <p>{todo.todo}</p>
            <span>{todo.isCompleted ? "완료" : "미완료"}</span>
          </>
        )}
      </TodoContents>
      <TodoControlPanel>
        {
          isModify ?
            <>
              <DefaultButton onClick={() => setIsModify(!isModify)}>취소</DefaultButton>
              <DefaultButton onClick={handleUpdateClick}>갱신</DefaultButton>
            </> :
            <>
              <DefaultButton onClick={() => setIsModify(!isModify)}>수정</DefaultButton>
              <DefaultButton onClick={handleDeleteClick}>삭제</DefaultButton>
            </>
        }
      </TodoControlPanel>
    </TodoItemContainer>
  );
};

export default TodoItem;
