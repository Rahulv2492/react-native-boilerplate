import { takeEvery, call, put, all } from 'redux-saga/effects';
import { USER_API } from '../../constants/ActionTypes';
import { AUTHRIZATION_TOKEN_KEY } from '../../constants';
import request from '../../services/RequestService';
import { storeData } from '../../utils/helpers';
import _ from 'lodash';

function* signIn(action) {
    const userBody = _.get(action, 'state.user');
    try {
        // const {
        //     data: { user, token },
        // } = yield call(request, {
        //     url: `auth/login`,
        //     method: 'POST',
        //     data: userBody,
        // });
        const token = 'demo token';
        const user = { name: 'demo' };
        if (token && token.length) {
            yield storeData({
                [AUTHRIZATION_TOKEN_KEY]: `Bearer ${token}`,
            });
        }
        yield put({
            type: USER_API.SUCCESS,
            state: {
                isAuthenticated: true,
                user,
            },
        });
    } catch (error) {
        yield put({
            type: USER_API.FAILED,
            state: {
                isAuthenticated: false,
                user: {},
            },
        });
    }
}

export default function* rootSaga() {
    yield all([yield takeEvery(USER_API.REQUESTING, signIn)]);
}
