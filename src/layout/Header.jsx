import React from 'react';

import styled from 'styled-components';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

import { DefaultButton } from '../styles/Buttons';

const StyledHeader = styled.header`
    height: 6vh;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 5px 100px;
    
`;

const LogoContainer = styled.div`
    font-size: 20px;
    font-weight: 800;
`;

const StyledNav = styled.nav`
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`



const Header = () => {

    const { user, signout } = useAuth();

    return (
        <StyledHeader>
            <LogoContainer>
                <span>Todo App</span>
            </LogoContainer>
            <StyledNav>
                <span>{user}</span>
                <DefaultButton onClick={() => signout()}>로그아웃</DefaultButton>
            </StyledNav>
        </StyledHeader>
    );
};

export default Header;