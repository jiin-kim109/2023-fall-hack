import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';  
import logo from '../resources/newleaf.png';
import BoldText from '../hooks/useBold'

const Wrapper = styled.div`
    display: flex;
    padding: 4Px;
    border-size: 1px;
    border-width: 2px;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
`;


const Logo = styled.img`
    max-width: 100px;
    flex: 1;
`;

function Header() {
    return (
            <Wrapper>
                <Logo src={logo} alt="Logo" />
                <Button color="leaf" size="large"><BoldText>HOME</BoldText></Button>
                <Button BoldText color="leaf" size="large"><BoldText>POPULAR PLACES</BoldText></Button>
                <Button color="leaf" size="large"><BoldText>CONTACT US</BoldText></Button>
                <Button variant="contained" color="leaf" size="large">
                        <BoldText>SIGN UP</BoldText>
                </Button>
            </Wrapper>
    );
}

export default Header;
