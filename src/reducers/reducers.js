import { combineReducers } from 'redux';

import data from './data';
import tool from './selectedTools';

export default combineReducers({    
    data: data,
    tool: tool
});