import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function Questionnaire() {
    const { qId } = useParams();
    return (
        <div>
            <Wrapper>
                <h3>Question {qId}: ... ?</h3>
                <p>options</p>
            </Wrapper>
        </div>
    );
}

export default Questionnaire;
