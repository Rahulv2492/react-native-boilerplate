import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';
import { createStore, applyMiddleware } from 'redux';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
