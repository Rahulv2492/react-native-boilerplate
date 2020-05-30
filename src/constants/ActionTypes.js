import { createRequestTypes } from './../utils/helpers';

// User
export const USER_REDUCER = 'USER';
export const USER_API = createRequestTypes(USER_REDUCER);
USER_API.RESTORE_TOKEN = 'RESTORE_TOKEN';
