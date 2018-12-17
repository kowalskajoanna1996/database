import { call, put, takeLatest } from 'redux-saga/effects';

import toolsService from "../api/tools.service";
import { PUT_TOOLS, GET_TOOLS, ERROR_OCCUR, ActionTypes } from '../actions/actions';

export function* getToolsFlow() {
    yield put(GET_TOOLS());
    try {
        const tools = yield call(
            [toolsService, toolsService.getTools]
        );
        console.log(tools);
        yield put(PUT_TOOLS(tools));
    } catch(e) {
        yield put(ERROR_OCCUR('An Error has occured.'));
    }
}


export default function* () {
    yield takeLatest(ActionTypes.GET_DATA_TOOLS, getToolsFlow);
}