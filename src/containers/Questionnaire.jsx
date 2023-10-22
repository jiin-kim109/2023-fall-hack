import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useQuestionnaireState from '../hooks/useQuestionnaireState';
import { Button } from '@mui/material';
import questionnaireData from '../resources/questionaire.json';
import parse from '../lib/parser';
import BoldText from '../hooks/useBold'

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

function QuestionnaireOption({ option_type, option, outputText, onSelect }) {
    const handleOptionSelect = () => {
        onSelect(option, outputText);
    };

    let component;

    switch (option_type) {
        case "select":
            component = (
                <Button variant="contained" color="leaf" size="large" onClick={handleOptionSelect}>
                    <BoldText>{option.option}</BoldText>
                </Button>
            );
            break;
        default:
            component = (
                <Button variant="contained" color="leaf" size="large" onClick={handleOptionSelect}>
                    <BoldText>{option.option}</BoldText>
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
    const [sliderValue, setSliderValue] = useState(0);
    const [output_text, setOutputText] = useState("");
    const [textInput, setTextInput] = useState("");
    const [isOptionSelected, setIsOptionSelected] = useState(false);


    const handleOptionSelect = (option, outputText) => {

        setnextId(option.next_page_id)
        setUserResponses({ option });
        setOutputText(outputText);
        console.log(option);
        setIsOptionSelected(true);


    };

    const goToNextQuestion = () => {
        setIsOptionSelected(false);
        if (nextId != null) {
            navigate(`/q/` + nextId);
        } else {
            navigate(`/result`);
        }

        let s;
        if (qId == 1 || qId == 3) {
            console.log(sliderValue);
            s = parse(output_text, [{"key": "a", "replaceTo": sliderValue}]);
        } else if (qId == 6) {
            s = parse(output_text, [{"key": "a", "replaceTo": textInput}]);
        } else  {
            s = parse(output_text, userResponses.option.values);
        }
        console.log(s);

        dispatch({
            action: "APPEND",
            value: s,
        })
    };
    const handleSliderChange = (event) => {
        setIsOptionSelected(true);

        console.log(question.options[0].next_page_id)
        const newValue = event.target.value;
        setSliderValue(newValue);
        const option = question.options[0].next_page_id
        setOutputText(question.output_text);


        if (option) {
            setnextId(option)
        }
    };

    const handleTextChange = (event) => {
        setIsOptionSelected(true);
        const newText = event.target.value;
        setTextInput(newText);
        setOutputText(question.output_text);

        const option = question.options[0].next_page_id;
        if (option) {
            setnextId(option)
        }
    }



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
                        ) : (
                            <></>
                        )}
                        {question.option_type === 'select' ? (
                            <QuestionnaireOption
                                option_type={question.option_type}
                                option={option}
                                outputText={question.output_text}
                                onSelect={handleOptionSelect}
                            />
                        ):(
                            <></>
                        )}

                        {question.option_type === 'text' ? (
                            <input
                                type='textbox'
                                onChange={handleTextChange}
                            />
                        ):(
                            <></>
                        )}
                    </div>
                ))}

                <Button> </Button>
                {isOptionSelected && (
    <BottomWrapper>
        <Button variant='outlined' onClick={goToNextQuestion}>Next</Button>
    </BottomWrapper>
)}
            </Wrapper>
        </div>
    );
}

export default Questionnaire;
