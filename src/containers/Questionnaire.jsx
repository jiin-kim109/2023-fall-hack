import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useQuestionnaireState from '../hooks/useQuestionnaireState';
import { Button } from '@mui/material';
import questionnaireData from '../resources/questionaire.json';

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
`;

function findQuestion(question_id) {
    return questionnaireData.questions.find(q => q.id == question_id);
}

function QuestionnaireOption({ option_type, option, onSelect }) {
    const handleOptionSelect = () => {
        onSelect(option);
    };

    let component;

    switch (option_type) {
        case "select":
            component = (
                <Button variant="contained" onClick={handleOptionSelect}>
                    {option.option}
                </Button>
            );
            break;
        default:
            component = (
                <Button variant="contained" onClick={handleOptionSelect}>
                    {option.option}
                </Button>
            );
            break;
    }

    return component;
}

function Questionnaire() {
    const navigate = useNavigate();
    const { qId } = useParams();
    const [state, dispatch] = useQuestionnaireState();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userResponses, setUserResponses] = useState({});
    const [nextId, setnextId] = useState(1);
    const question = findQuestion(qId);
    const [sliderValue, setSliderValue] = useState(1);

    const handleOptionSelect = (option) => {

        setnextId(option.next_page_id)
        setUserResponses({ ...userResponses, [question.id]: option });

    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex + 1 < questionnaireData.questions.length) {
            navigate(`/q/` + nextId);

        }
    };
    const handleSliderChange = (event) => {
        console.log(question.options[0].next_page_id)
        const newValue = event.target.value;
        setSliderValue(newValue);
        const option = question.options[0].next_page_id

        if (option) {
            setnextId(option)
        }
    };



    return (
        <div>
            <Wrapper>
                <h3>Question {qId}: {question.question}</h3>

                {question.options.map((option, i) => (
                    <div key={i}>
                        {question.option_type === 'scale' ? (
                            <div>
                                <input

                                    type="range"
                                    min={question.scale_min}
                                    max={question.scale_max}
                                    step={1}
                                    id="slider"
                                    value={sliderValue}
                                    onChange={handleSliderChange}


                                />
                                {sliderValue}
                            </div>
                        ) : 
                        
                        (
                            <QuestionnaireOption
                                option_type={question.option_type}
                                option={option}
                                onSelect={handleOptionSelect}
                            />
                        )}
                    </div>
                ))}

                <Button> </Button>
                <BottomWrapper>
                    <Button variant='outlined' onClick={goToNextQuestion}>Next</Button>
                </BottomWrapper>
            </Wrapper>
        </div>
    );
}

export default Questionnaire;
