import { call, put, takeLatest } from 'redux-saga/effects';

import toolsService from "../api/tools.service";
import { PUT_DATA, GET_DATA, ERROR_OCCUR, ActionTypes, GET_TOOL, PUT_TOOL } from '../actions/actions';

export function* getToolsFlow() {
    yield put(GET_DATA());
    try {
        const tools = yield call(
            [toolsService, toolsService.getTools]
        );
        yield put(PUT_DATA(tools));
    } catch(e) {
        yield put(ERROR_OCCUR('An Error has occured.'));
    }
}

export function* getSelectedToolFlow(action) {
    yield put(GET_TOOL());
    try {
        const toolTable = yield call(
            [toolsService, toolsService.getTool],
            action.data
        );
        yield put(PUT_TOOL(toolTable));
    } catch(e) {
        yield put(ERROR_OCCUR('An Error has occured.'));
    }
}

export default function* () {
    yield takeLatest(ActionTypes.GET_SELECTED_TOOL, getSelectedToolFlow);
    yield takeLatest(ActionTypes.GET_DATA_TOOLS, getToolsFlow);
}