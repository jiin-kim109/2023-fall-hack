import React from 'react';
import Logo from '../components/Logo';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function MainPage() {
    const navigate = useNavigate();
    return (
        <div>
            <Wrapper>
                {/* <Logo width={250} height={250} /> */}
                <Button variant="contained" onClick={() => navigate("/q/1")}>Get Started</Button>
                <Button variant="text" onClick={() => navigate("/result")}>Result</Button>
            </Wrapper>
        </div>
    );
}

export default MainPage;
