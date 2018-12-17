import { ActionTypes } from "../actions/actions";

const initialState = {
    tools: null,
    isLoading: false,
    errorMsg: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.GET_TOOLS: 
            return {
                ...state,
                errorMsg: '',
                isLoading: false
            }
        case ActionTypes.PUT_TOOLS: 
            return {
                ...state,
                tools: action.payload.tools,
                isLoading: false
        }
        case ActionTypes.ERROR_OCCUR: 
            return {
                ...state,
                errorMsg: action.payload.errorMsg,
                isLoading: false
            }
        default:
            return state;
    }
}