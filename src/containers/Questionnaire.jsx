import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useQuestionnaireState from '../hooks/useQuestionnaireState';
import { Button } from '@mui/material';
import questionnaireData from '../resources/sample_json.json';

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BottomWrapper = styled.div`
    display: flex;
    flex: 1;
    border: 2px solid red;
    flex-direction: row;
    align-items: right;
`

function findQuestion(question_id) {
    let question = null;

    for (const q of questionnaireData.questions) {
        if (q.id == question_id) {
            question = q;
            break;
        } 
    }

    if (!question)
        throw new Error(`Question ${question_id} Not Found.`);

    return question;
}

function QuestionnaireOption({ option_type, option }) {
    console.log(option);
    let component;
    switch(option_type) {
        case "select":
            component = (<Button variant="contained">{option.option}</Button>);
            break;
        default:
            component = (<Button variant="contained">{option.option}</Button>);
            break;
    }
    return component;
}

function Questionnaire() {
    const navigate = useNavigate();
    const { qId } = useParams();
    const [state, dispatch] = useQuestionnaireState();
    const question = findQuestion(qId);
    
    return (
        <div>
            <Wrapper>
                <h3>Question {qId}: {question.question } ?</h3>
                {question.options.map((option, i) => (
                    <QuestionnaireOption key={i} option_type={question.option_type} option={option} />
                ))}
                <Button onClick={() => {
                    dispatch({
                        type: 'APPEND',
                        value: 'test sentence'
                    });
                }}></Button>
                <BottomWrapper>
                    <Button variant='outlined' onClick={() => null} >Next</Button>
                </BottomWrapper>
            </Wrapper>
        </div>
    );
}

export default Questionnaire;
