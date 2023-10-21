import React from 'react';
import styled, { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const MWrapper = styled.div`
    display: flex;
    flex: 1;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const DWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 2px solid blue;
`;

const DinWrapper = styled.div`
    display: flex;
    flex = 1;
    width: 100%;
    border: 2px solid red;
    padding: 10px;
    justify-content: center;
    align-items: center;
`;

const Maintitle = styled.div`
    text-align: center;
    flex: 1;
    margin: 20px;
`;

const titlefont = {
    fontSize: 50

}

const desfont = {
    fontSize: 30
}

const Description = styled.div`
    text-align: center;
    padding: 10px;
`;


function MainPage() {
    const navigate = useNavigate();
    return (
        <div>
            <MWrapper>
                <Maintitle>
                    <div>
                        <p style={titlefont}>Rediscover Your Life {"\n"}
                        with AI Guidance  </p>
                        Trusted by 5 travellers
                    </div>
                </Maintitle>
            </MWrapper>
            <DWrapper>
                <DinWrapper>
                    <Description>
                    <p style={desfont}>Enjoy your moment in foreign countries </p>
                    TurnOverNavi AI-based generator recommends 
    the best place to live for all durations, displaying 
    pinpoint locations on a map
                    </Description>
                </DinWrapper>
                <DinWrapper>  
                    <Button variant="contained" color="leaf" onClick={() => navigate("/q/1")}>Start your trip</Button>
                </DinWrapper>
            </DWrapper>
        </div>
    );
}

export default MainPage;
