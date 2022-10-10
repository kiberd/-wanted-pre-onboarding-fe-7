import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { validate } from "../utills/validate";
import useForm from "../hooks/useForm";
import { useAuth } from '../hooks/useAuth';

import { DefaultButton } from '../styles/Buttons';

const StyledRegisterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  width: 50%;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 70%;
  height: 30px;
  margin: 10px 0;
`;

const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  padding: 30px;
`;

const ErrorMsg = styled.span`
  color: red;
  font-size: small;
`;

const Login = () => {
  const { user, signin } = useAuth();
  const navigate = useNavigate();

  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: { email: "", password: "" },
    onSubmit: async () => {
      const response = await signin(values.email, values.password);
      console.log(response);
      if (response.status === 200) {
        if (user){
          alert("로그인 성공!");
          navigate("/todo");
        }
      } else {
        alert(response.data.message);
      }
    },
    validate,
  });

  return (
    <StyledRegisterContainer>
      <LoginBox>
        <h1>로그인</h1>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="email"
            name="email"
            placeholder={"E-mail"}
            value={values.email}
            onChange={handleChange}
          ></StyledInput>

          {values.email.length !== 0 && errors.email && (
            <ErrorMsg>이메일은 @을 포함해야합니다.</ErrorMsg>
          )}

          <StyledInput
            type="password"
            name="password"
            placeholder={"Password"}
            value={values.password}
            onChange={handleChange}
          ></StyledInput>
          {values.password.length !== 0 && errors.password && (
            <ErrorMsg>패스워드는 8자 이상이어야 합니다.</ErrorMsg>
          )}

          <ButtonContainer>
            <DefaultButton
              type="submit"
              disabled={Object.values(errors).length !== 0}
            >
              로그인
            </DefaultButton>
            <Link to="/register">
              <DefaultButton type="submit">회원가입</DefaultButton>
            </Link>
          </ButtonContainer>
        </StyledForm>
      </LoginBox>
    </StyledRegisterContainer>
  );
};

export default Login;
