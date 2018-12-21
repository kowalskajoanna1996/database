import { ActionTypes } from "../actions/actions";

const initialState = {
    toolTable: null,
    hasSelected: false,
    isLoading: false,
    errorMsg: ''
};

export default (state = initialState, action) => {
    switch(action.type) {   
        case ActionTypes.GET_TOOL: 
            return {
                ...state,
                errorMsg: '',
                isLoading: true,
                hasSelected: true
            }
        case ActionTypes.PUT_TOOL: 
            return {
                ...state,
                toolTable: action.payload.toolTable,
                isLoading: false
        }
        case ActionTypes.ERROR_OCCUR_TOOL: 
            return {
                ...state,
                errorMsg: action.payload.errorMsg,
                isLoading: false
            }
        default:
            return state;
    }
}