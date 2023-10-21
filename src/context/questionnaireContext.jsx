import React, { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import questionnaireReducer, { initialState } from './questionnaireReducer';

const QuestionnaireContext = createContext();

function QuestionnaireContextProvider({ children }) {
    const [state, dispatch] = useReducer(
        questionnaireReducer,
        initialState,
    );
    return (
        <QuestionnaireContext.Provider
            value={useMemo(() => {
                return [state, dispatch];
            }, [state, dispatch])}
        >
            {children}
        </QuestionnaireContext.Provider>
    );
}

QuestionnaireContextProvider.propTypes = {
    children: PropTypes.node,
};

QuestionnaireContextProvider.defaultProps = {
    children: null,
};

export { QuestionnaireContext, QuestionnaireContextProvider };