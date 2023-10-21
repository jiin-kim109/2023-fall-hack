import React from 'react';
import Logo from '../components/Logo';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    width: 150px;
    height: 50px;
`;

function MainPage() {
    const navigate = useNavigate();
    return (
        <div>
            <Wrapper>
                <Logo width={250} height={250} />
                <Button onClick={() => navigate("/q/1")}>Get Started</Button>
            </Wrapper>
        </div>
    );
}

export default MainPage;
