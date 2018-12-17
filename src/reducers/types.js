import { ActionTypes } from "../actions/actions";

const initialState = {
    selectedTypeData: null,
    isLoading: false,
    errorMsg: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.GET_TOOLS: 
            return {
                ...state,
                selectedTypeData: action.payload.selectedTypeData
            }
        default:
            return state;
    }
}