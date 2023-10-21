import React from 'react';
import Logo from '../components/Logo';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


const mWrapper = styled.div`
    display: flex;
    flex: 1;
    padding: 50px;
    flex-direction: column;
    borderStyle: dashed;
    margin: 
    justify-content: center;
    align-items: center;
`;

const dWrapper = styled.div`
    display: flex;
    flex: 1;
    margin: 30px;
    borderStyle: dashed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const Maintitle = styled.div`
    text-align: center;
    flex: 1;
    margin: 30px;
`;

const Description = styled.div`
    text-align: center;
`;


function MainPage() {
    const navigate = useNavigate();
    return (
        <div>
            <mWrapper>
                <Maintitle>Rediscover Your Life with AI Guidance</Maintitle>
                <Maintitle>Trusted by 5 travellers</Maintitle>
            </mWrapper>
            <dWrapper>
                <Description>Enjoy your moment in foreign countries </Description>
                <Button variant="contained" onClick={() => navigate("/q/1")}>Get Started</Button>
            </dWrapper>
        </div>
    );
}

export default MainPage;
