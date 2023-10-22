import React from 'react';
import styled, { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../theme'
import BoldText from '../hooks/useBold';
import videoT from '../resources/Travel.mp4'

const MWrapper = styled.div`
    display: flex;
    flex: 1;
    padding: 5px;
    width: 100%;
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
`;

const DinWrapper = styled.div`
    display: flex;
    flex = 1;
    width: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
`;

const Maintitle = styled.div`
    text-align: center;
    flex: 1;
    white-space: pre-wrap;
    font-weight: bold;
`;

const titlefont = {
    fontSize: 50,
    color: 'white'
}

const mainMar = { 
    padding: '0 10%',     
};

const desfont = {
    fontSize: 25,
    color: 'white'
}

const des2font = {
    fontSize: 15,
    color: 'white'
}

const Description = styled.div`
    text-align: left;
    padding: 5px;
    margin-left: 40px;
`;

function MainPage() {
    const navigate = useNavigate();
    return (
        <div> 
            <div class="overlay"></div>
            <video src={videoT} width="100%" autoPlay loop muted />
            <div class="content" style={mainMar}>
            <MWrapper>
                <Maintitle>
                        <div>
                            <p style={titlefont}><BoldText>Rediscover Your Life {"\n"}
                            with AI Guidance</BoldText>  </p>
                        </div>
                    </Maintitle>
            </MWrapper>
                <DWrapper>
                    <DinWrapper>
                        <Description>
                        <p style={desfont}><BoldText>Enjoy your moment in foreign countries</BoldText> </p>
                        <p style={des2font}>The NewLeafNavi AI-powered generator suggests the ideal living locations for various durations up to a year, displaying precise pinpoints</p>
                        </Description>
                    </DinWrapper>
                    <DinWrapper>  
                        <Button variant="contained" color="leaf" size="large" onClick={() => navigate("/q/1")}><BoldText>Start your trip</BoldText></Button>
                    </DinWrapper>
                </DWrapper> 
            </div>
        </div>
    );
}

export default MainPage;
