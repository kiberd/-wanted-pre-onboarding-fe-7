import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 15px;
`;

const Loading = () => {
    return (
        <LoadingContainer>
            불러오는중..
        </LoadingContainer>
    );
};

export default Loading;