import { USER_API } from './../../constants/ActionTypes';
const LoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_API.RESTORE_TOKEN:
            return {
                ...state,
                ...action.state,
            };
        default:
            return state;
    }
};

export default LoginReducer;
