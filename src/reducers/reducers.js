import { combineReducers } from 'redux';

import tools from './tools';
import types from './types';

export default combineReducers({    
    tools: tools,
    types: types 
});