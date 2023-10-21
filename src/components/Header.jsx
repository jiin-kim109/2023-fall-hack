import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    padding: 5px;
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
            <Text>HEADER</Text>
            {/* <Logo src={logoSrc} alt="Logo" /> */}
        </Wrapper>
    );
}

export default Header;
