import { CircularProgress } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

function LoadingScreen() {
    return (
        <Wrapper>
            <CircularProgress color="success" />
        </Wrapper>
    )
}

export default LoadingScreen;