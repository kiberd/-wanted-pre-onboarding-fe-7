import React, { useState } from "react";
import styled from "styled-components";
import { DefaultButton } from "../styles/Buttons";

const TodoItemContainer = styled.div`
  display: flex;
  width: 90%;
  /* background-color: gray; */
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
    color: gray;
    font-size: small;
    font-style: italic;
  }
`;

const TodoControlPanel = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-evenly;
`;

const StyledInput = styled.input`
  width: 70%;
  height: 30px;
  margin: 10px 0;
`;

const TodoItem = () => {
  const [isModify, setIsModify] = useState(false);

  return (
    <TodoItemContainer>
      <TodoContents>
        {isModify ? (
          <StyledInput />
        ) : (
          <>
            <p>원티드 프리온보딩 챌린지 과제하기원티드 프리온보딩 챌린지 과제하기원티드 프리온보딩 챌린지 과제하기원티드 프리온보딩 챌린지 과제하기원티드 프리온보딩 챌린지 과제하기원티드 프리온보딩 챌린지 과제하기</p>
            <span>2022/10/09 18:40</span>
          </>
        )}
      </TodoContents>

      <TodoControlPanel>
        <DefaultButton onClick={() => setIsModify(!isModify)} >{isModify ? "취소" : "수정"}</DefaultButton>
        <DefaultButton>{isModify ? "제출" : "삭제"}</DefaultButton>
      </TodoControlPanel>
    </TodoItemContainer>
  );
};

export default TodoItem;
