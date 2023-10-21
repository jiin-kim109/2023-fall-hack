import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useQuestionnaireState from '../hooks/useQuestionnaireState';
import { Button } from '@mui/material';

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function Questionnaire() {
    const { qId } = useParams();
    const [state, dispatch] = useQuestionnaireState();
    return (
        <div>
            <Wrapper>
                <h3>Question {qId}: ... ?</h3>
                <p>option 1</p>
                <Button onClick={() => {
                    dispatch({
                        type: 'APPEND',
                        value: 'test sentence'
                    });
                }}></Button>
            </Wrapper>
        </div>
    );
}

export default Questionnaire;
