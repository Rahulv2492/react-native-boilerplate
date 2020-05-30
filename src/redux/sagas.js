import { all } from 'redux-saga/effects';
import userSaga from '@screens/Login/saga';

export default function* root() {
    yield all([userSaga()]);
}
