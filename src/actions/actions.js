export const PUT_TOOLS = (tools) => ({
    type: ActionTypes.PUT_TOOLS,
    payload: { tools }
});

export const GET_TOOLS = () => ({
    type: ActionTypes.GET_TOOLS,
    payload: {}
});

export const ERROR_OCCUR = (errorMsg) => ({
    type: ActionTypes.ERROR_OCCUR,
    payload: { errorMsg }
});

export const ActionTypes = {
    GET_TOOLS: 'GET_TOOLS',
    PUT_TOOLS: 'PUT_TOOLS',
    ERROR_OCCUR: 'ERROR_OCCUR',
    GET_DATA_TOOLS: 'GET_DATA_TOOLS'
};

