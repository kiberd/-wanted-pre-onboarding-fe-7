import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 15px;
`;

const Error = () => {
    return (
        <ErrorContainer>
            데이터를 가져오는데 문제가 발생했습니다.
        </ErrorContainer>
    );
};

export default Error;