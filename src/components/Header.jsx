import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';  
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../resources/logo.png';

const Wrapper = styled.div`
    display: flex;
    padding: 4px;
    border-size: 1px;
    border-width: 2px;
    border-style: dashed;
    justify-content: space-between;
    align-items: center;
`;


const Text = styled.div`
    text-align: center;
    flex: 1;
`;


const Logo = styled.img`
    max-width: 100px; /* Adjust the width as needed */
`;

function Header() {
    return (
        <Wrapper>
            <Stack direction="row" spacing={30}>
                <Logo src={logo} alt="Logo" />
                <Text>Rediscover Your Path with AI Guidance</Text>
                <Button variant="contained">
                    SIGN UP
                </Button>
            </Stack>
        </Wrapper>
    );
}

export default Header;
