import { USER_API } from '../../constants/ActionTypes';

export const userLogin = () => {
    return {
        type: USER_API.REQUESTING,
        state: {
            isAuthenticated: false,
            user: {
                username: '<username>',
                password: '<Password>',
            },
        },
    };
};

export const restoreToken = playload => {
    return {
        type: USER_API.RESTORE_TOKEN,
        state: { ...playload },
    };
};
