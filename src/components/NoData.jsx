import React from 'react';
import styled from 'styled-components';

const NoDataContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 15px;
`;

const NoData = ({ text }) => {
    return (
        <NoDataContainer>
            {text}
        </NoDataContainer>
    );
};

export default NoData;