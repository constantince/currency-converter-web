import {createLogger} from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import Reducer from '../Reducer';
import { applyMiddleware, createStore} from 'redux';
import Saga from '../Saga';

const sagaMiddleWare = createSagaMiddleWare();
const loggMiddleWare = createLogger({collapsed: true});

const store = createStore(Reducer, applyMiddleware(
  loggMiddleWare, sagaMiddleWare
));

sagaMiddleWare.run(Saga);

export default store;