import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';  
import logo from '../resources/newleaf.png';

const Wrapper = styled.div`
    display: flex;
    padding: 4Px;
    border-size: 1px;
    border-width: 2px;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
    max-width: 100px;
    flex: 1;
`;

function Header() {
    return (
        <Wrapper>
            <Logo src={logo} alt="Logo" />
                <Button variant="contained" color="leaf">
                        SIGN UP
                </Button>
        </Wrapper>
    );
}

export default Header;
