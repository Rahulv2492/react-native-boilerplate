import { combineReducers } from 'redux';
import withReducer from './../utils/withReducer';

import { USER_REDUCER } from './../constants/ActionTypes';
import LoginReducer from '@screens/Login/reducer';

const reducers = combineReducers({
    user: withReducer(USER_REDUCER, LoginReducer),
});

export default reducers;
