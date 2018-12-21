export const PUT_DATA = tools => ({
    type: ActionTypes.PUT_DATA,
    payload: { tools }
});

export const GET_DATA = () => ({
    type: ActionTypes.GET_DATA,
    payload: {}
});

export const ERROR_OCCUR = errorMsg => ({
    type: ActionTypes.ERROR_OCCUR,
    payload: { errorMsg }
});

export const PUT_TOOL = toolTable => ({
    type: ActionTypes.PUT_TOOL,
    payload: { toolTable }
});

export const GET_TOOL = () => ({
    type: ActionTypes.GET_TOOL,
    payload: {}
});

export const ERROR_OCCUR_TOOL = errorMsg => ({
    type: ActionTypes.ERROR_OCCUR,
    payload: { errorMsg }
});

export const ActionTypes = {
    GET_DATA: 'GET_DATA',
    PUT_DATA: 'PUT_DATA',
    ERROR_OCCUR: 'ERROR_OCCUR',
    GET_DATA_TOOLS: 'GET_DATA_TOOLS',
    PUT_TOOL: 'PUT_TOOL',
    GET_TOOL: 'GET_TOOL',
    GET_SELECTED_TOOL: 'GET_SELECTED_TOOL',
    ERROR_OCCUR_TOOL: 'ERROR_OCCUR_TOOL'
};

