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
    margin: 10px;
    border-size: 1px;
    border-width: 2px;
    border-style: dashed;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
    max-width: 100px;
    flex: 1;
    margin-left: 150px;
`;

function Header() {
    return (
        <Wrapper>
            <Logo src={logo} alt="Logo" />
                <Button variant="contained">
                    SIGN UP
                </Button>
        </Wrapper>
    );
}

export default Header;
