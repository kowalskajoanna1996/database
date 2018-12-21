import { ActionTypes } from "../actions/actions";

const initialState = {
    tools: null,
    isLoading: true,
    errorMsg: ''
};

export default (state = initialState, action) => {
    switch(action.type) {   
        case ActionTypes.GET_DATA: 
            return {
                ...state,
                errorMsg: '',
                isLoading: true
            }
        case ActionTypes.PUT_DATA: 
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