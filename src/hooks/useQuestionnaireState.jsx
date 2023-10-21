import { useContext } from 'react';
import { QuestionnaireContext } from '../context/calculatorContext';

export default function useQuestionnaireState() {
    return useContext(QuestionnaireContext);
}