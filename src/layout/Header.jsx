import React from 'react';

import styled from 'styled-components';
import { useAuth } from '../useAuth';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
    height: 5vh;
    background-color: black;
`

const Header = () => {

    const { signout } = useAuth();

    return (
        <StyledHeader>
            <button onClick={() => signout()}>로그아웃</button>
            <button><Link to="/">/</Link></button>
            <button><Link to="/todo">todo</Link></button>
        </StyledHeader>
    );
};

export default Header;