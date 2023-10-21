import Joi from 'joi';

export const initialState = {
    questions: [],
};

/**
 * Calculator Context State Schema
 */
const schema = Joi.object({
    questions: Joi.array().items(Joi.string())
});

/**
 * Action Reducer
 */
function questionnaireReducer(prevState, dispatch) {
    let state;
    let error;

    ({ error } = Joi.object({
        action: Joi.any().required(),
        value: Joi.any()
            .required()
            .error(() => {
                throw new Error(
                    `No value given to questionnaireReducer`,
                );
            }),
    }).validate(dispatch));

    switch (dispatch.action) {
        case "APPEND_ANSWER":
            state = {
                ...prevState,
                questions: [
                    ...prevState.questions,
                    dispatch.value
                ]
            }
            break;
        default:
            throw new Error(
                `Unhandled action type: ${dispatch.action}`,
            );
    }

    ({ error } = schema.validate(state));
    if (error)
        throw new Error(
            `Questionnaire Reducer: Invalid state update: ${error}`,
        );

    return state;
}

export default questionnaireReducer;