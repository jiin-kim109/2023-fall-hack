import { useContext } from 'react';
import { QuestionnaireContext } from '../context/questionnaireContext';

export default function useQuestionnaireState() {
    return useContext(QuestionnaireContext);
}

